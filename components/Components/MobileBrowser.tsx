'use client'

import "./MobileBrowser.css";

import { useCallback, useEffect, useState } from 'react';
import { CSVBankExtractLoader } from '../../components/Loaders/CSVBankExtractLoader';
import { CSVBudgetExtractLoader } from '../../components/Loaders/CSVBudgetExtractLoader';
import { EDocumentType, IAccountPeriod, TBudget, TMapping, getWholePeriod, tagPeriods } from "../../components/Data/Bank";
import { Balance } from '../../components/Components/Balance';
import { TagList } from '../../components/Components/TagList';
import { BalanceHistoryChart } from '../../components/Charts/BalanceHistoryChart';
import { TagHistoryChart } from '../../components/Charts/TagHistoryChart';
import { TagRepartitionChart } from '../../components/Charts/TagRepartitionChart';
import { AccountList } from '../../components/Components/AccountList';
import { ExportMapping } from '../../components/Exporters/ExportMapping';
import { MappingExtractLoader } from '../../components/Loaders/MappingExtractLoader';
import { ExportTaggedCSV } from '../../components/Exporters/ExportTaggedCSV';
import { Lines } from '../../components/Components/Lines';
import { GoogleCSVUploader } from '@/components/Loaders/GoogleCSVUploader';
import { CSVUploader } from '@/components/Loaders/CSVUploader';
import { GoogleLogin } from '@/components/Components/GoogleLogin';
import { TagMonthlyTendencyChart } from '@/components/Charts/TagMonthlyTendencyChart';
import { TagByMonthChart } from '@/components/Charts/TagByMonthChart';
import { TagBudgetConsumptionChart } from '@/components/Charts/TagBudgetConsumptionChart';
import { QuartileHistoryChart } from '@/components/Charts/QuartileHistoryChart';
import { Nav } from './Mobile/Nav';

export default function MobileBrowser() {

  const [isLoggedOut, setIsLoggedOut] = useState<boolean>(true);
  const [isLoadingFromLocalDrive, setLoadingFromLocalDrive] = useState<boolean>(false);

  const [accountFiles, setAccountFiles] = useState<File[]>([]);
  const [mappingfiles, setMappingFiles] = useState<File[]>([]);
  const [budgetFiles, setBudgetFiles] = useState<File[]>([]);

  const [useAccount, setUseAccount] = useState<boolean>(false);
  const [useBudget, setUseBudget] = useState<boolean>(false);

  const [isDataGenerated, setIsDataGenerated] = useState<boolean>(false);
  const [isMappingLoaded, setIsMappingLoaded] = useState<boolean>(false);
  const [isDataToTagLoaded, setisDataToTagLoaded] = useState<boolean>(false);
  const [periods, setPeriods] = useState<IAccountPeriod[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<IAccountPeriod>({
    begin: new Date(),
    end: new Date(),
    lines: [],
    isAggregated: false
  });
  const [mapping, setMapping] = useState<TMapping>({});
  const [linesToTag, setLinesToTag] = useState<IAccountPeriod[]>([]);
  const [budgets, setBudgets] = useState<TBudget>({});
  const [selectedMode, setSelectedMode] = useState<string>("expenses");

  const handleCSVLoading = useCallback((data: IAccountPeriod[]): void => {
    console.log("loaded : " + data.length);
    if (data.length > 0) {
        const wholePeriod = getWholePeriod(data);
        setPeriods([wholePeriod, ...data]);
        setSelectedPeriod(wholePeriod);
    }
  }, []);

  const handleCSVToTagLoading = useCallback((data: IAccountPeriod[]): void => {
    if (data.length > 0) {
        const taggedData: IAccountPeriod[] = tagPeriods(data, mapping);
        setLinesToTag(taggedData)
    }
  }, [mapping]);

  useEffect(() => {
    if (periods.length > 0) {
      setIsDataGenerated(true);
    }

    if (Object.keys(mapping).length > 0) {
      setIsMappingLoaded(true);
    }

    if (linesToTag.length > 0) {
      setisDataToTagLoaded(true);
    }
  }, [periods, mapping, linesToTag])

  //https://developers.google.com/drive/api/quickstart/js
  const CLIENT_ID = "983498276769-rvir7h8fu2g1bjt6d8g4n3qkohca4c9q.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDzBUKG-QkH4W7z0h4eR9-UtC0CyCyJy60";
  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = 'https://www.googleapis.com/auth/drive';

  const handleLoadedFiles = (loadedFiles: File[], documentType: EDocumentType) => {
    console.log("Loaded files : " + loadedFiles);

    switch(documentType) {
      case EDocumentType.ACCOUNT:
        setAccountFiles(loadedFiles);
        setUseAccount(true);
        break;
      case EDocumentType.BUDGET:
        setBudgetFiles(loadedFiles);
        setUseBudget(true);
        break;
      default: console.warn(documentType + " is not a supported document type");
    }
  }

  const handleLocalLoadedFiles = (loadedFiles: File[], documentType: EDocumentType) => {
    setLoadingFromLocalDrive(true);
    handleLoadedFiles(loadedFiles, documentType);
  }

  const handlePeriodSelection = (period: IAccountPeriod) => {
    setSelectedPeriod(period);

    //Force to display expenses view when selecting aggregated period when budget was displayed
    setSelectedMode((old) => {
      if (old === "budget" && period.isAggregated) {
        return "expenses";
      }
      return old;
    });
  }

  const handleNavSelection = (navAction: string, period?: IAccountPeriod) => {
    if (navAction === "Load") {
      console.log("todo : display load accounts");
    }
    else if (navAction === "DisplayAccount" && period) {
      console.log("Display selected period " + period.begin.toLocaleDateString() + " - " + period.end.toLocaleDateString());
      setSelectedPeriod(period);
    }
  }

  return (
    <div>
        <Nav handleNavSelection={handleNavSelection} periods={periods}></Nav>
        <main className='main'>
          <div>

            {!isLoadingFromLocalDrive &&
              <div className='section-wrapper'>
                  <p>Load from Google Drive</p>
                  <GoogleLogin CLIENT_ID={CLIENT_ID} API_KEY={API_KEY} SCOPES={SCOPES} DISCOVERY_DOC={DISCOVERY_DOC} onChange={(status: boolean) => setIsLoggedOut(status)}></GoogleLogin>
              </div>
            }

            {!isLoggedOut &&
              <>
              <>
              <div className='section-wrapper'>
                <p>Accounts</p>
                <GoogleCSVUploader handleFiles={handleLoadedFiles} documentType={EDocumentType.ACCOUNT}></GoogleCSVUploader>
                {useAccount &&
                  <>
                  <p>Budget</p>
                  <GoogleCSVUploader handleFiles={handleLoadedFiles} documentType={EDocumentType.BUDGET}></GoogleCSVUploader>
                  </>
                }
              </div>

              {!useAccount &&
                <div className='section-wrapper'>
                  <p>Mappings</p>
                  <GoogleCSVUploader handleFiles={handleLoadedFiles} documentType={EDocumentType.MAPPING}></GoogleCSVUploader>
                </div>
              }
              </>

              {useAccount &&
                <>
                <CSVBankExtractLoader idExtract="A" onValuesChange={handleCSVLoading} files={accountFiles}/>

                {useBudget &&
                  <CSVBudgetExtractLoader onValuesChange={setBudgets} files={budgetFiles}/>
                }
                </>
              }
              </>
            }

            {isLoggedOut &&
              <div className='section-wrapper'>
                <p>Load from computer</p>
                <>
                <CSVUploader handleFiles={handleLocalLoadedFiles} documentType={EDocumentType.ACCOUNT} formId="load-accounts" actionLabel='Load Accounts'></CSVUploader>
                {useAccount &&
                  <CSVUploader handleFiles={handleLocalLoadedFiles} documentType={EDocumentType.BUDGET} formId="load-budget" actionLabel='Load Budgets'></CSVUploader>
                }
                </>

                {useAccount &&
                  <>
                  <CSVBankExtractLoader idExtract="C" onValuesChange={handleCSVLoading} files={accountFiles}/>

                  {useBudget &&
                    <CSVBudgetExtractLoader onValuesChange={setBudgets} files={budgetFiles}/>
                  }
                </>
                }
              </div>
            }

            {isDataGenerated &&
              <div className='section-wrapper'>
                <TagList account={selectedPeriod} onTagSelect={setSelectedTag}/>
              </div>
            }
          </div>

          {isDataGenerated &&
            <div>
              <div>
                <button id={"btn-display-expenses"} name={"btn-display-expenses"} className={selectedMode === "expenses" ? "btn-link-selected " : "btn-link "} onClick={() => {setSelectedMode("expenses")}}>
                    Display Expenses
                </button>
                <button id={"btn-display-lines"} name={"btn-display-lines"} className={selectedMode === "lines" ? "btn-link-selected " : "btn-link "} onClick={() => {setSelectedMode("lines")}}>
                    Display Account lines
                </button>
              </div>

              {selectedMode === "expenses" &&
                <div>
                  {selectedTag === "" &&
                    <div>
                      {selectedPeriod.isAggregated &&
                        <BalanceHistoryChart accountLines={selectedPeriod.lines}/>
                      }
                      {!selectedPeriod.isAggregated &&
                        <QuartileHistoryChart accountLines={selectedPeriod.lines} allAccountLines={periods.map((period) => period.lines).flat()}></QuartileHistoryChart>
                      }

                      <TagByMonthChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                      <TagRepartitionChart accountLines={selectedPeriod.lines} tag={selectedTag}/>

                    </div>
                  }

                  {selectedTag !== "" &&
                    <div>
                      {selectedPeriod.isAggregated &&
                        <TagMonthlyTendencyChart accountLines={selectedPeriod.lines} tag={selectedTag} allowedAmount={Object.keys(budgets).length === 0 ? 0 : budgets[selectedTag]}/>
                      }
                      <div className="chart-container">
                      {!selectedPeriod.isAggregated &&
                        <TagBudgetConsumptionChart allowedAmount={Object.keys(budgets).length === 0 ? 0 : budgets[selectedTag]} accountLines={selectedPeriod.lines} tag={selectedTag}></TagBudgetConsumptionChart>
                      }
                      <TagByMonthChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                      <TagRepartitionChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                      </div>

                      <TagHistoryChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                    </div>
                  }
                </div>
              }

              {selectedMode === "lines" &&
                <Lines accountLines={selectedPeriod.lines} tag={selectedTag}/>
              }
            </div>
          }
        </main>
    </div>
  )
}

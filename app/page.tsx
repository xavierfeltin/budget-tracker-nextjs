'use client'

import { useCallback, useEffect, useState } from 'react';
import { CSVBankExtractLoader } from '../components/Loaders/CSVBankExtractLoader';
import { IAccountPeriod, TMapping, getWholePeriod, tagPeriods } from "../components/Data/Bank";
import { Balance } from '../components/Components/Balance';
import { TagList } from '../components/Components/TagList';
import { BalanceHistoryChart } from '../components/Charts/BalanceHistoryChart';
import { TagHistoryChart } from '../components/Charts/TagHistoryChart';
import { TagRepartitionChart } from '../components/Charts/TagRepartitionChart';
import { TagHistoryMonthlyChart } from '../components/Charts/TagMonthlyHistoryChart';
import { AccountList } from '../components/Components/AccountList';
import { ExportMapping } from '../components/Exporters/ExportMapping';
import { MappingExtractLoader } from '../components/Loaders/MappingExtractLoader';
import { ExportTaggedCSV } from '../components/Exporters/ExportTaggedCSV';
import { Lines } from '../components/Components/Lines';
import Script from 'next/script';
import { GoogleCSVUploader } from '@/components/Loaders/GoogleCSVUploader';
import { CSVUploader } from '@/components/Loaders/CSVUploader';
import { GoogleLogin } from '@/components/Components/GoogleLogin';

export default function Home() {

  const [isTokenLoaded, setIsTokenLoaded] = useState<boolean>(false);
  const [isGAPILoaded, setIsGAPILoaded] = useState<boolean>(false);
  const [tokenClient, setTokenClient] = useState<unknown>({});
  const [isLoggedOut, setIsLoggedOut] = useState<boolean>(true);

  const [listedFiles, setListedFiles] = useState<{id: string, name: string}[]>([]);
  const [files, setFiles] = useState<File[]>([]);

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
  const [selectedMode, setSelectedMode] = useState<string>("charts");

  const handleCSVLoading = useCallback((data: IAccountPeriod[]): void => {
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

  const handleLoadedFiles = (loadedFiles: File[]) => {
    console.log("Loaded files : " + loadedFiles);
    setFiles(loadedFiles);
  }

  return (
    <div className='gridLayout'>
        <div className='leftColumn'>
          {!isMappingLoaded &&
            <GoogleLogin CLIENT_ID={CLIENT_ID} API_KEY={API_KEY} SCOPES={SCOPES} DISCOVERY_DOC={DISCOVERY_DOC} onChange={(status: boolean) => setIsLoggedOut(status)}></GoogleLogin>
          }

          {!isLoggedOut &&
            <div className='section-wrapper'>
              <GoogleCSVUploader handleFiles={handleLoadedFiles}></GoogleCSVUploader>
            </div>
          }

          {!isMappingLoaded && isLoggedOut &&
            <CSVUploader handleFiles={handleLoadedFiles} formId="load-accounts" actionLabel='Load from computer'></CSVUploader>
          }

          <CSVBankExtractLoader onValuesChange={handleCSVLoading} files={files}/>

          {(isDataToTagLoaded || isDataGenerated) &&
            <div className='section-wrapper'>
              {isDataToTagLoaded &&
                <ExportTaggedCSV periods={linesToTag}></ExportTaggedCSV>
              }
              {isDataGenerated &&
                <ExportMapping periods={periods}></ExportMapping>
              }
              {isDataGenerated &&
                <AccountList periods={periods} onAccountSelect={setSelectedPeriod}></AccountList>
              }
              {isDataGenerated &&
                <TagList account={selectedPeriod} onTagSelect={setSelectedTag}/>
              }
            </div>
          }

          <div className='section-wrapper'>
            <MappingExtractLoader onValuesChange={setMapping}/>
            {isMappingLoaded &&
              <CSVBankExtractLoader onValuesChange={handleCSVToTagLoading} files={files}/>
            }
          </div>
        </div>

        {isDataGenerated &&
          <div>
            <Balance account={selectedPeriod} tag={selectedTag}/>

            <div>
              <button id={"btn-display-charts"} name={"btn-display-charts"} className={selectedMode === "charts" ? "btn-link-selected " : "btn-link "} onClick={() => {setSelectedMode("charts")}}>
                  Display charts
              </button>
              <button id={"btn-display-lines"} name={"btn-display-lines"} className={selectedMode === "lines" ? "btn-link-selected " : "btn-link "} onClick={() => {setSelectedMode("lines")}}>
                  Display account lines
              </button>
            </div>
            {selectedMode === "charts" &&
              <div>
                {selectedTag === "" &&
                  <div>
                    <BalanceHistoryChart accountLines={selectedPeriod.lines}/>
                    <TagRepartitionChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                  </div>
                }

                {selectedTag !== "" &&
                  <div>
                    <TagHistoryMonthlyChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                    <TagHistoryChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                    <TagRepartitionChart accountLines={selectedPeriod.lines} tag={selectedTag}/>
                  </div>
                }
              </div>
            }

            {selectedMode === "lines" &&
              <Lines accountLines={selectedPeriod.lines} tag={selectedTag}/>
            }
          </div>
        }
    </div>
  )
}

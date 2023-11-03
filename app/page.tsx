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

export default function Home() {

  const [isTokenLoaded, setIsTokenLoaded] = useState<boolean>(false);
  const [isGAPILoaded, setIsGAPILoaded] = useState<boolean>(false);
  const [tokenClient, setTokenClient] = useState<unknown>({});

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
  const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  const initializeGapiClient = async () => {
    //@ts-ignore
    await gapi.client.init({
      'apiKey': API_KEY,
      'discoveryDocs': [DISCOVERY_DOC], // Your API key will be automatically added to the Discovery Document URLs.
    });
    console.log("Client API initialized");
    setIsGAPILoaded(true);
  }

  const listFiles = async () => {
    let response;
    try {
      //@ts-ignore
      response = await gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': 'files(id, name)',
      });
    } catch (err) {
      console.error(err);
      return;
    }
    const files = response.result.files;
    if (!files || files.length == 0) {
      console.warn('No files found');
      return;
    }
    console.log(files);
  }

  return (
    <>
        <Script async defer src="https://accounts.google.com/gsi/client" onLoad={() => {
          //@ts-ignore
          const token = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: '', // defined later
          });
          console.log("Token: " + JSON.stringify(token));
          setTokenClient(token);
          setIsTokenLoaded(true);
        }} strategy='lazyOnload'></Script>

        <Script src="https://apis.google.com/js/api.js" onLoad={() => {
          //@ts-ignore
          gapi.load('client', initializeGapiClient);
        }} strategy='lazyOnload'></Script>

    <button id={"btn-google-authent"} name={"btn-google-authent"} hidden={!(isTokenLoaded && isGAPILoaded)} onClick={() => {
        //@ts-ignore
        tokenClient.callback = async (resp: unknown) => {
          //@ts-ignore
          if (resp.error !== undefined) {
            throw (resp);
          }
          listFiles();
        };

        //@ts-ignore
        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          //@ts-ignore
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          //@ts-ignore
          tokenClient.requestAccessToken({prompt: ''});
        }
    }}>
      Log in
    </button>

    <button id={"btn-google-logout"} name={"btn-google-logout"} hidden={!(isTokenLoaded && isGAPILoaded)} onClick={() => {
      //@ts-ignore
      const token = gapi.client.getToken();
      if (token !== null) {
        //@ts-ignore
        google.accounts.oauth2.revoke(token.access_token);
        //@ts-ignore
        gapi.client.setToken('');
      }
    }}>
      Log out
    </button>

    <div className='gridLayout'>
        <div className='leftColumn'>
          <div className='section-wrapper'>
          {!isMappingLoaded &&
            <CSVBankExtractLoader onValuesChange={handleCSVLoading}/>
          }

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

          <div className='section-wrapper'>
            <MappingExtractLoader onValuesChange={setMapping}/>
            {isMappingLoaded &&
              <CSVBankExtractLoader onValuesChange={handleCSVToTagLoading}/>
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
    </>
  )
}

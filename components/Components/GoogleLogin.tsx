import { useEffect, useState } from "react";
import Script from 'next/script';

export interface InputRangeProps {
    CLIENT_ID: string;
    API_KEY: string;
    DISCOVERY_DOC: string;
    SCOPES: string;
    onChange: (isLoggedOut: boolean) => void;
}

export function GoogleLogin({
    CLIENT_ID,
    API_KEY,
    DISCOVERY_DOC,
    SCOPES,
    onChange
    }: InputRangeProps) {

    const [isTokenLoaded, setIsTokenLoaded] = useState<boolean>(false);
    const [isGAPILoaded, setIsGAPILoaded] = useState<boolean>(false);
    const [tokenClient, setTokenClient] = useState<unknown>({});
    const [isLoggedOut, setIsLoggedOut] = useState<boolean>(true);
    const [listedFiles, setListedFiles] = useState<{id: string, name: string}[]>([]);


    useEffect(() => {
        onChange(isLoggedOut);
    }, [isLoggedOut, onChange])

    const initializeGapiClient = async () => {
        //@ts-ignore
        await gapi.client.init({
          'apiKey': API_KEY,
          'discoveryDocs': [DISCOVERY_DOC], // Your API key will be automatically added to the Discovery Document URLs.
        });
        console.log("Client API initialized");
        setIsGAPILoaded(true);
    }

    const getAccountFolderId = async () => {
        let response;
        try {
          //@ts-ignore
          response = await gapi.client.drive.files.list({
            'pageSize': 2,
            'corpora': 'user',
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true,
            'orderBy': 'name',
            'q': "name='Comptes' and mimeType = 'application/vnd.google-apps.folder'",
            'fields': 'files(id, name)'
          });
        } catch (err) {
          console.error(err);
          return "";
        }
        const files = response.result.files;
        if (!files || files.length == 0) {
          console.warn('No files found');
          return "";
        }

        if (files.length > 1) {
          console.warn('Too many folders found');
          return "";
        }

        return files[0].id;
    }

    const listFilesInFolder = async (folderId: string) => {
        let response;
        try {
            //@ts-ignore
            response = await gapi.client.drive.files.list({
            'pageSize': 10,
            'corpora': 'user',
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true,
            'orderBy': 'name',
            'q': "'" + folderId + "' in parents and mimeType='text/csv'",
            'fields': 'files(id, name)'
            });
        } catch (err) {
            console.error(err);
            return;
        }
        const files: {id: string, name: string}[] = response.result.files;
        if (!files || files.length == 0) {
            console.warn('No files found');
            return;
        }
        setListedFiles(files);
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

        <div hidden={!(isTokenLoaded && isGAPILoaded) || !isLoggedOut}>
            <button id={"btn-google-authent"} name={"btn-google-authent"} className="button-18"  onClick={() => {
                    //@ts-ignore
                    tokenClient.callback = async (resp: unknown) => {
                        //@ts-ignore
                        if (resp.error !== undefined) {
                            throw (resp);
                        }
                        getAccountFolderId().then((folderId: string) => {
                            listFilesInFolder(folderId);
                        });

                        setIsLoggedOut(false);
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
                Login
            </button>
        </div>

        <div hidden={isLoggedOut}>
            <button id={"btn-google-logout"} name={"btn-google-logout"} className="button-18"  onClick={() => {
                //@ts-ignore
                const token = gapi.client.getToken();
                if (token !== null) {
                    //@ts-ignore
                    google.accounts.oauth2.revoke(token.access_token);
                    //@ts-ignore
                    gapi.client.setToken('');
                    setIsLoggedOut(true);
                }
            }}>
                Logout
            </button>
        </div>
        </>
    )
}
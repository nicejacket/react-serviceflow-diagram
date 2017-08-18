import 'whatwg-fetch';

const BPM_HOST = `http://${location.hostname}:${location.port}/bpm`;

export function getProcessDefinitionModel(processDefinitionId: string) {
  let url = `${BPM_HOST}/activiti-app/app/rest/process-definitions/${processDefinitionId}/model-json`;
  return fetch(url, getRequestOptions()).then(res => res.json()).catch(handleError);
}

export function getRunningProcessDefinitionModel(processInstanceId: string) {
  let url = `${BPM_HOST}/activiti-app/app/rest/process-instances/${processInstanceId}/model-json`;
  return fetch(url, getRequestOptions()).then(res => res.json()).catch(handleError);
}

function getHeaders() {
  return new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': this.authService.getTicketBpm()
  });
}

function getRequestOptions(param?: any) {
  let headers = getHeaders();
  return  { headers: headers, withCredentials: true, search: param };
}

function handleError(error: any) {
  throw error.json().error || 'Server error';
}
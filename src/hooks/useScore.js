export default function useScore(scoreCallback, firebaseIdToken, superOrganizationIdToken = null, updateData = null) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const { status } = xhr

      if (status === 0 || (status >= 200 && status < 400)) {
        scoreCallback(JSON.parse(xhr.responseText), status)
      } else {
        scoreCallback({}, status)
      }
    }
  }
  const body = {
    id_token: firebaseIdToken,
    super_org_token: superOrganizationIdToken,
    data: updateData,
  }
  xhr.open('POST', 'http://127.0.0.2:8080/console/score')
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
  xhr.send(JSON.stringify(body))
}

To test

```bash
python3 -m venv ../venv
source ../venv/bin/activate
pip install -r requirements.txt
python main.py
```

to deploy

```bash
gcloud app deploy --project=getbouncer-web --promote
```

To access prod for now, use this URL:

```
https://getbouncer-web.appspot.com
```
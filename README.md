Simple API that scraps https://www.sourcemod.net/downloads.php and returns the latest sourcemod versions.

```bash
curl http://localhost:9323/api/sourcemod/builds
```

Sample response
```json
[
  {
    "build": "6923",
    "windowsLink": "https://sm.alliedmods.net/smdrop/1.11/sourcemod-1.11.0-git6923-windows.zip",
    "linuxLink": "https://sm.alliedmods.net/smdrop/1.11/sourcemod-1.11.0-git6923-linux.tar.gz",
    "details": "\nTrigger build for TF2 SDK update\n\n",
    "commit": "https://github.com/alliedmodders/sourcemod/commit/16da1f433bd465aab8dc1f701776f97"
  },
  {
    "build": "6922",
    "windowsLink": "https://sm.alliedmods.net/smdrop/1.11/sourcemod-1.11.0-git6922-windows.zip",
    "linuxLink": "https://sm.alliedmods.net/smdrop/1.11/sourcemod-1.11.0-git6922-linux.tar.gz",
    "details": "\nTrigger build against SDK update\n\n",
    "commit": "https://github.com/alliedmodders/sourcemod/commit/f9765981dc341815c41840a900cd79e"
  }
]
```

### Running locally
```bash
npm install
npm run dev
```
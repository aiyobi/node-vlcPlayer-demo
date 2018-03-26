# WebChimera.js Player Demo

#### Description

Demo for [wcjs-player](https://github.com/jaruba/wcjs-player) showing WebChimera.js Player playing a single video. ``wcjs-player`` uses [WebChimera.js](https://github.com/RSATom/WebChimera.js) to draw the frames of libVLC to a canvas.

#### Demo Install

```
git clone https://github.com/jaruba/node-vlcPlayer-demo.git
cd node-vlcPlayer-demo
```

**Install electron v1.7.9

```
npm install electron@1.7.9
```

**Windows**
```
set WCJS_RUNTIME=electron
set WCJS_RUNTIME_VERSION=v1.4.13
set WCJS_VERSION=v0.2.7
set WCJS_ARCH=x64
npm install
```

**OSX/Linux**
```
export WCJS_RUNTIME="electron"
export WCJS_RUNTIME_VERSION="v1.4.13"
export WCJS_VERSION="v0.2.7"
export WCJS_ARCH="x64"
npm install
```

Now run `app.js`

```
    node_modules/electron/dist/electron.exe app.js
```

!! You can change the configuration values for `wcjs-prebuilt` according to your case, but keep in mind that the options are limited to the [prebuilt packages](https://github.com/RSATom/WebChimera.js/releases)

#### Screenshots

WebChimera.js Player running on NW.js (Windows)

<img src="http://webchimera.org/samples/wcjs-player.png">

WebChimera.js Player running on Electron (Mac)

<img src="http://webchimera.org/samples/wcjs-player-2.png">



# Additional Steps (YobiAI)

Replace `node_modules/wcjs-prebuilt/bin/WebChimera.js.node` file with the one provided in separate zip file


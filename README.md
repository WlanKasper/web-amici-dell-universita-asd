## Setup

Before you start, you have to create a .env file and insert those keys (you can find them in contentful)
```
CONTENTFUL_SPACE_ID = <key>
CONTENTFUL_ACCESS_TOKEN = <key>
CONTENTFUL_MANAGEMENT_TOKEN = <key>
```

After that you have to install dependencies
```bash
npm install
```

## Run
Once you've created a project and installed dependencies start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

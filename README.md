# OM Design System
A collection of [React](https://react.dev/) components for OM websites and applications. It uses [TailwindCSS](https://tailwindcss.com/) and therefore also exports a `tailwind.config.js` preset, configured with all the official OM colors. As most projects are build using [Next.js](https://nextjs.org/) this library will be fully compatible with it. This library also has [TypeScript](https://www.typescriptlang.org/) support.

## Usage
Install `@operatiemobilisatie/design-system` using npm or yarn
```js
npm i @operatiemobilisatie/design-system
```

Make sure you've imported the OM Design System styles into your `layout.js` or `page.js`:
```js
// app/layout.js

import "@operatiemobilisatie/design-system/css";
```

Add the OM Design System preset to your `tailwind.config.js` and include the library as content:
```js
// tailwind.config.js

import { omTailwindComponents, omTailwindPresets } from "@operatiemobilisatie/design-system/tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    omTailwindPreset // OM Tailwind Preset here
  ],
  content: [
    "./node_modules/@operatiemobilisatie/design-system/dist/**/*.{js,jsx,ts,tsx}" // Define as content to include in-component tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    omTailwindComponents // OM Tailwind Components here
  ],
}
```

Only thing now is to simply import the component and use it!
```js
// app/page.js

import { Button, Modal } from '@operatiemobilisatie/design-system';

export default function Page() {
  return (
    <Modal>
      <Button variant="full" color="primary" size="small">God is love!</Button>
    </Modal>
  );
}

```

## To Do
- [x] Publish as package
- [ ] Add documentation

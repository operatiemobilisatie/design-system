# OM Design System
A collection of [React](https://react.dev/) components for OM websites and applications. It uses [TailwindCSS](https://tailwindcss.com/) and therefore also exports a `tailwind.config.js` preset, configured with all the official OM colors. As most projects are build using [Next.js](https://nextjs.org/) this library will be fully compatible with it. This library also has [TypeScript](https://www.typescriptlang.org/) support.

## Usage
Make sure you've imported the OM Design System styles into your `layout.js` or `page.js`:
```js
// app/layout.js

import "@operatiemobilisatie/design-system/dist/css/style.css";
```

Add the OM Design System preset to your `tailwind.config.js`:
```js
// tailwind.config.js

import { omTailwindPreset } from '@operatiemobilisatie/design-system';

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    omTailwindPreset // OM Tailwind Preset here
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Only thing now is to simply import the component and use it!
```js
// app/page.js

import { Button } from '@operatiemobilisatie/design-system';

export default function Page() {
  return (
    <Button variant="full" color="primary" size="small">God is love!</Button>
  );
}

```

## To Do
- [ ] Publish to NPM
- [ ] Add documentation

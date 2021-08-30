/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    mode: 'jit',
       // These paths are just examples, customize them to match your project structure
    purge: [
      // './public/**/*.html',
      './**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: "class",
    variants: {
      backgroundColor: [
        "dark",
        "dark-hover",
        "dark-group-hover",
        "dark-even",
        "dark-odd"
      ],
      borderColor: ["dark", "dark-focus", "dark-focus-within"],
      textColor: ["dark", "dark-hover", "dark-active"],
    //   extend: {
    //    opacity: ["dark-hover"],
    //   }
    },
    theme:{
      extend: {
        colors: {
          'vladam-blue': '#2b6cb0',
          'vladam-blue-lighter': '#3491dc',
        }
      }
    }
  };
  
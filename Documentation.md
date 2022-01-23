## Router installation

I'm using **svelte-spa-router** to deal with multiple pages as a SPA (Single Page Application).

I used their documentation from their github to implement it : https://github.com/ItalyPaleAle/svelte-spa-router

Notes :
* All is needed to make it work is an import and create a **Router** div object that contains a variable with a variable named **routes** containing an json object with '%path_name%': %component%
* I did put it in App.svelte because it seemed logic but I have no idea if this is standard
* hrefs are the best way to navigate within the app
* It's a hash based router. You have to put **#/** in the hrefs otherwise it won't work

## typescript installation

If you create a new svelte project using the template project from their repo (this command)

	npx degit sveltejs/template %project_name%

All you have to do is execute the setupTypeScript.js in the script folder

	node scripts/setupTypeScript.js

After that, you need to install the dependancies coming with it

	npm install

## unit testing (jest) installation

I used this video to implement the unit testing : https://www.youtube.com/watch?v=ZBS-ldGLCRw

### First step

Install all the necessary dependancies with :

	npm i -D jest @testing-library/svelte @testing-library/user-event @testing-library/jest-dom

If you encounter the error : **[...]Integrity verification failed for sha512[...]**

This command may help :
	npm clean cache


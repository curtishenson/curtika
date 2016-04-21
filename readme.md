```

                          __  . .* ,
                        ~#@#%(" .,$ @
                        ."^ ';"
                       ..
                      ;. :                                   . .
                      ;==:                     ,,   ,.@#(&*.;'
                      ;. :                   .;#$% & ^^&
                      ;==:                   &  ......
                      ;. :                   ,,;      :
                      ;==:  ._______.       ;  ;      :
                      ;. :  ;    ###:__.    ;  ;      :
_____________________.'  `._;       :  :__.' .'        `.__________________
```

# Factory

Start with this, modify as needed

--------------------

## Folder Structure

This mimics how servers are typically setup, with most files in a public folder. Things like Craft can be put outside the public folder.

```
.
├── public
|  ├── _scss
|      ├── main.scss
|      ├── bourbon
|      └── components
|          ├── _grid.scss      – sass grid mixin, from the foundation framework
|          ├── _hacks.scss     – everything hacky/undesirable should be put in here
|          ├── _mixins.scss    – Sass mixins
|          ├── _normalize.scss – CSS reset
|          └── _variables.scss – keep sass website variables centralized
|  ├── assets
|      ├── css
|      ├── img
|      └── js
|          ├── vendor – plugins, files that shouldn't be edited
|          └── main.js
|  ├── index.html
|  ├── robots.txt
├── .gitignore
├── .htaccess
├── watch_sass.command – automatically compiles sass files
```

### _scss

This directory contains all the SASS files. main.scss should import files from /components. Organize the components folder however makes sense. The [bourbon sass framework](http://bourbon.io) is included in the folder.

### assets

This is the directory for all the css(generated or static), images, and javascript. User generated or CMS files shouldn't go here, just the website files themselves.

### robots

Edit this file to include any pages you need hidden from search engines.

### htaccess

This is complete htaccess file, all commented out. Choose what you need, cacheing, gzipped, expires headers stuff. Just read it. It may be worth going to [github.com/h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache) and having a look at it.

--------------------

### Command Files

The .command files are scripts that when executed will run terminal commands.

- __watch\_sass.command__ Watches sass files in public/_scss and will automatically compile css files into public/assets/css


# TODO
- checkout [lemanz](https://github.com/grayghostvisuals/lemanz)

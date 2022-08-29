# Icons Extraction

The Plan:

1. Find svg icons in use
      1. MUI uses 5 different icons for shape
            1. plaine
            2. _outlined\_
            3. _rounded\_
            4. _sharp\_
            5. _two\_tone\_
2. Make a package
3. Use that package into components

## Ideas

1. Simple : package of svg icons
2. Tooling : repo Build (create and optimize svg) & repo Library (Icons library)
      1. Build : create useable icons from dropped files
            1. folder `convert/` : drop svg
            2. `npm create` : from read `convert/` (check not zero & extension) to create svg proper icon into `icon-libraary/` folder
            3. folder `icon-libraary/` : export useable icons library
      2. synchronous update : ¿Lerna or nothing? update library after build


<link rel="stylesheet" href="" />

https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200
import React from "react";
import "./App.css";

import imgIconFonts from "./assets/img/font-icons-components.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Icons</h1>
        <article>
          <p>
            This project shows two different implementations
            <ul>
              <li>
                Icons as css classes prove How-To implement a icons library font
                build from scratch, using FontForge and Adobe Illustrator to
                finally call those icons as classes.
              </li>
              <li>
                Icons as Components adapt the current Icons Components based in
                SvgIcons and {"&"} MUI to use the icons library built which is
                in the FDEL-158 of DS because config needs of @vanilla-extract.
              </li>
            </ul>
          </p>
        </article>
        <section>
          <h2>Icons as css classes</h2>
          <ul>
            <li>Icons as css classes</li>
            <ul>
              <li>
                <span className="euro_outlined"></span> .euro_outlined
              </li>
              <li>
                <span className="euro_rounded"></span> .euro_rounded
              </li>
              <li>
                <span className="file_copy_outlined"></span> .file_copy_outlined
              </li>
              <li>
                <span className="file_copy_rounded"></span> .file_copy_rounded
              </li>
              <li>
                <span className="shopping_cart_outlined"></span>{" "}
                .shopping_cart_outlined
              </li>
              <li>
                <span className="shopping_cart_rounded"></span>{" "}
                .shopping_cart_rounded
              </li>
            </ul>
          </ul>

            <pre>
              {`
            @font-face {
              font-family: 'libraryFont';
              font-style: normal;
              src: local('libraryFont'), 
                url(./assets/fonts/finalLibraryFont.ttf) 
                format('truetype');
            }
            
            .euro_outlined:after {
              font-family: 'libraryFont';
              content: "\\2d2c"
            }
            `}
            </pre>
        </section>

        {/* Icons as Components */}
        <section>
          <h2>Icons as Components</h2>
          <p>
            The following image correspond to{" "}
            <code>packages/icon/src/icons/</code> new files created (7) just for
            this research which wont' be merged into production. About those
            files, the important concept to be taken is:
            <ul>
              <li>
                The icon component file implements a logic, almost the same, but
                implements an icon which comes from an <code>icons.css.ts</code>
              </li>
              <li>
                {" "}
                The icons.css.ts <code>import {"{ globalFontFace }"} from
                '@vanilla-extract/css'</code> to load the icons library which is called
                by the components
              </li>
            </ul>
          </p>
          <img style={{ width: "300px" }} src={imgIconFonts} />
          <ul>
            <li>To see Font Icons Components go to FDEL-158 branch.</li>
            <li>To get the icons library visit <a className="App-link" href="https://mui-extract-icons.vercel.app/static/media/finalLibraryFont.d101264c3f7ed13404cb.ttf">finalLibraryFont</a></li>
          </ul>

          <h2>Font Icons Component</h2>
            <pre>
              {`
            const IconTypes = {
              [IconType.Rounded]: classNames.arrow_downward_rounded,
              [IconType.Sharp]: 'StarSharp',
              [IconType.Outlined]: classNames.arrow_downward_outlined
          };

          export default (props: object) => {
              return (
                <span 
                  style={{fontSize: '28px'}} 
                  className={IconTypes[IconType.Outlined]} 
                  {...props}
                ></span>
              )
          };
            `}
            </pre>

          <h2>Old SVG Icons Component</h2>
            <pre>
              {`
            const IconTypes = {
              [IconType.Rounded]: ArrowDownwardRounded,
              [IconType.Sharp]: ArrowDownwardSharp,
              [IconType.Outlined]: ArrowDownwardOutlined
          };
          
          export default (props: SvgIconProps) => {
              let { iconType } = useTheme();
              return createElement(IconTypes[iconType || IconType.Rounded], { ...props });
          };
            `}
            </pre>
        </section>
      </header>
    </div>
  );
}

export default App;

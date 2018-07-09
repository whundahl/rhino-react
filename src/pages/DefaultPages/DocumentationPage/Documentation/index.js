import React from 'react'
import { Collapse } from 'antd'
import './style.scss'

const Panel = Collapse.Panel

class Documentation extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
          <div className="utils__title">
            <strong>Documentation</strong>
          </div>
        </div>
        <div className="card-body">
          <h4>1. Overview</h4>
          <hr />
          <div className="alert alert-warning">
            Rating is a very important both for us (it motivates to develop new modules), and for
            future customers. So we request you to rate our Templates with 5 Stars on Themeforest.
            <br />
            You can do it in{' '}
            <a href="https://themeforest.net/downloads" target="_blank" rel="noopener noreferrer">
              Themeforest Download section
            </a>. Thank you!
          </div>
          <div className="alert alert-default">
            Please use Starter Kit if default package compiling slow (default package has about a
            hundreds of pages and components).
          </div>
          <p>
            Clean UI credits: <code>React</code>, <code>CreateReactApp</code>,{' '}
            <code>ReactAppRewired</code>,
            <code>Redux</code>, <code>Redux-Thunk</code>,
            <code>ReactRouter 4</code>,<code>Webpack 3</code>,<code>AntDesign</code>,
            <code>ESLint</code>, <code>prettier</code>, <code>SASS Loader</code>, <code>Axios</code>,
            <code>Bootstrap</code>,
            <code>Chart.js</code>,<code>Chartist</code>,<code>Peity</code>,<code>C3</code>
          </p>
          <p>
            Clean UI is a framework, which uses the concept of modularity. The use of such approach
            allows you to drastically reduce the time and cost of development. Build the interface
            from the ready blocks and modules quickly and easily, like Lego! And all this is
            available now for ReactJS.
          </p>
          <p>
            This is a completely modular framework, built on the latest technologies, such as BEM
            methodology (Block Element Modifier). Following the simple and understandable rules of
            this methodology allows the easy support of code even after long-term development.
            Adding new functionality and modifying the old one has never been so easy before. The
            presence of a variety of useful development methodologies make this process easier and
            more enjoyable; for example, such feature as rem measurement units make mobile versions
            of applications, built on the basis of Clean UI, look great on any type of devices. Open
            our template on your mobile phone and be sure to verify it yourself!
          </p>
          <p>
            Clean UI - a modern professional admin template, based on mixed frameworks such as Ant
            Design and Bootstrap 4 framework. It's a powerful and super flexible tool, which suits
            best for any kind of web application: Web Applications; CRM; CMS; Admin Panels;
            Dashboards; etc. Clean UI is fully responsive, which means that it looks perfect on
            mobiles and tablets.
          </p>
          <br />
          <h4>2. Installation</h4>
          <hr />
          <p>Installation:</p>
          <ol>
            <li>
              Install latest Node.js from here{' '}
              <a
                className="utils__link--blue utils__link--underlined"
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nodejs.org
              </a>
            </li>
            <li>
              Install latest Yarn Package Manager from here{' '}
              <a
                className="utils__link--blue utils__link--underlined"
                href="https://yarnpkg.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://yarnpkg.com
              </a>
            </li>
            <li>
              Install node modules <code>yarn install</code>
            </li>
            <li>
              Run app <code>yarn start</code> (if app compiling slow just comment out some routes in
              routes.js file)
            </li>
            <li>
              For build production files run <code>yarn build</code> (builds to /build/ folder)
            </li>
            <li>Open in any browser http://localhost:3000</li>
          </ol>
          <br />
          <h4>3. File Structure</h4>
          <hr />
          <p>
            Almost every source file of the template contains the necessary minimum comments to the
            code. Please be sure to read them to understand the work of this code.
          </p>
          <pre>
            {`+
+
├─ cleanui-admin-template-react/    .. react version
│  ├─ build/                        .. build app files after "yarn build" run
│  ├─ node_modules/                 .. node.js modules installed after "npm install" run
│  ├─ public/                       .. public createReactApp folder (bootstrap index.html file)
│  ├─ src/                          .. app source files
│  │  ├─ components/                .. reusable components
│  │  ├─ ducks/                     .. redux reducers
│  │  ├─ pages/                     .. pages & components
│  │  ├─ index.js                   .. bootstrap app js file
│  │  ├─ reactRouterConnected.js    .. router utility
│  │  ├─ registerServiceWorker.js   .. serviceWorker (cache manager)
│  │  └─ routes.js                  .. app routes
│  ├─ resources/                    .. resources folder
│  │  ├─ AntStyles/                 .. ant design styles
│  │  ├─ CleanStyles/               .. clean ui styles
│  │  ├─ _antd.less                 .. redefined Ant Design variables
│  │  └─ _mixins.scss/              .. global styles variables
│  ├─ *                             .. system react files
│  ├─ package.json                  .. dependencies config
│  └─ README.md                     .. git readme file
+
+
├─ bonus/                           .. free bonuses
│  ├─ cleanui-admin-template/       .. html version
│  └─ cleanui-website-template/     .. landing page
+
+
└─ documentation.html               .. link to template documentation`}
          </pre>
          <br />
          <h4>4. Lessons</h4>
          <hr />
          <p>
            You can learn how to create ReactJS+Redux apps here{' '}
            <a
              href="https://www.youtube.com/watch?v=ix4hjtu_aG4"
              className="utils__link--blue utils__link--underlined"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.youtube.com/watch?v=ix4hjtu_aG4
            </a>
          </p>
          <br />
          <h4>5. Font</h4>
          <hr />
          <p>
            This template uses font PT Sans, loaded from{' '}
            <a
              href="https://fonts.google.com/"
              className="utils__link--blue utils__link--underlined"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Fonts
            </a>. This font has to be loaded into head.
          </p>
          <pre
          >{`<link href="//fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet">`}</pre>
          <br />
          <h4>6. Changelog</h4>
          <hr />
          <Collapse>
            <Panel header="Version 1.0.0" key="1">
              — Framework Release
            </Panel>
          </Collapse>
          <br />
          <br />
          <h4>7. End of Documentation</h4>
          <hr />
          <p>
            Thank you once again for purchasing Clean UI Admin Template. We hope that you will use
            it in your project with delight.
          </p>
        </div>
      </section>
    )
  }
}

export default Documentation

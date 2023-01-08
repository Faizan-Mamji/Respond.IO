# Steps To Configure Project
## Installation

Following are the software that needs to be installed.
-  Node Js<br/>
   https://nodejs.org/en/download/
-  Vs Code <br/>
   https://code.visualstudio.com/download

---

## Clone The Project

```
> git clone https://github.com/Faizan-Mamji/Respond.IO.git
```
- After project clone, open project in Vs code.
- Once project loads, remove the package-lock.json file.
- Run command - npm install
- It will install the packages.
 
## Steps To Run The Project In Terminal
- Run the following command in terminal to run api & ui cases. <br/>
   npx playwright test tests/main.spec.ts  --headed
- Cases will execute for both Api & UI
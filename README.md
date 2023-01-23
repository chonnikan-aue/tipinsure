# Tip Insure (Backend)

> ### Insurance website that helps you compare and buy health-care insurance from Dhipaya Insurance Public Company Limited

**Take a look here:** https://chonnikan-aue-tipinsure.netlify.app/


## Technologies used

- **For designing wire frames:** [wireframe.cc](https://wireframe.cc/)

- **For fontend:** React.js ([Tipinsure](https://github.com/chonnikan-aue/tipinsure-client/))

- **For backend:** Express, Postgresql

- **For deployment:** Cyclic

- **For database:** bit.io


## Models

![image](https://user-images.githubusercontent.com/116629287/213961372-e3811881-0d17-4f69-ade5-2a3bacb39fbc.png)


## Routes

| Action |           Route          |      Function      | Needed Token |
|:------:|:------------------------:|:------------------:|:------------:|
|   get  |          /auth/          |        login       |       -      |
|  post  |          /auth/          |       signin       |       -      |
|   get  | /user/username/:username |  getUserByUsername |      yes     |
|   put  |       /user/:userId      |       putUser      |      yes     |
| delete |       /user/:userId      |     deleteUser     |      yes     |
|   get  |    /insurance/age/:age   | getInsurancesByAge |       -      |
|   get  |  /insurance/:insuranceId |  getInsuranceById  |       -      |
|  post  |         /insured/        |     postInsured    |       -      |

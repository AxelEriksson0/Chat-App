## NPM

#### Development
>* `npm install`
>* `npm run watch`

#### Production
>* `npm install --production`
>* `npm start`

---

## Docker

#### Build

>`docker build -t server:1.0.0 .`

#### Start
>`docker run -p 8000:8000 --name chat_server server:1.0.0`

#### Access
Your server will be available on `http://localhost:8000/` or if running Windows you might have to find the IP address with `docker-machine ip default`.
## Additional notes

To build the Docker container:
### `docker build -t server:1.0.0 .`

And then:
### `docker run -p 8000:8000 server:1.0.0`

Your server will be available on localhost:8000 or run
### `docker-machine ip default`
to see the container IP address (Windows)

---
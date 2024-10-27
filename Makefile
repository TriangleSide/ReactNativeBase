DOCKER_RUN := docker run --rm -v $(PWD):/app -w /app --network host

NPM_DOCKER_VERSION := 23
NPM_DOCKER_RUN := $(DOCKER_RUN) node:$(NPM_DOCKER_VERSION) npm

.PHONY: clean
clean:
	rm -rf ./coverage || true
	rm -rf ./lib || true
	@echo "Clean finished."

.PHONY: install
install:
	@echo "Starting install."
	$(NPM_DOCKER_RUN) --version --version
	$(NPM_DOCKER_RUN) install --verbose
	@echo "Install finished."

.PHONY: build
build: clean
	$(NPM_DOCKER_RUN) run build
	@echo "Build finished."

.PHONY: lint
lint:
	$(NPM_DOCKER_RUN) run lint
	@echo "Linting finished."

.PHONY: test
test: build
	$(NPM_DOCKER_RUN) run test
	@echo "Testing finished."

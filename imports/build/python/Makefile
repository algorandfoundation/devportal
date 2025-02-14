# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= poetry run sphinx-build
SOURCEDIR     = .
BUILDDIR      = _build
FULL_SPHINX_COMMAND = $(SPHINXBUILD) -M starlight "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS)

.PHONY: help Makefile

clean: 
	rm -rf _build && rm -rf apidocs

# Puya is a special case because we are not documenting the actual API and instead documenting generated stubs exposed via algopy
# TODO: In puya create a seperate task just for copy stubs/ to docs/
puya-setup:
	cd ../../repos/puya/ && poetry install --with=doc && poetry run poe gen && poetry run poe docs

puya: clean puya-setup
	export SPHINX_REPO=puya && \
	$(FULL_SPHINX_COMMAND) && \
	cp -r _build/starlight/apidocs/algopy/* "../../../src/content/docs/reference/algorand-python/API Reference"

utils: clean
	export SPHINX_REPO=utils && \
	$(FULL_SPHINX_COMMAND) && \
	cp -r _build/starlight/apidocs/* "../../../src/content/docs/reference/algokit-utils-py/API Reference"
	
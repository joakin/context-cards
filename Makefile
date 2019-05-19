.PHONY=all dist dev watch clean deploy

default: dist

ELM_MAKE_FLAGS=

OUTFOLDER=dist/
JSFILE=$(OUTFOLDER)/context-cards.js
JSUITESTFILE=$(OUTFOLDER)/context-cards-ui-test.js

SRC=src/
ELMMAIN=$(SRC)/ContextCards.elm
JSMAIN=$(SRC)/index.js
ELMUITESTMAIN=$(SRC)/UiTests.elm

ELM_SOURCES:=$(wildcard src/*.elm)

$(JSFILE): $(ELMMAIN) $(JSMAIN) $(ELM_SOURCES)
	@echo "Building elm"
	@elm make $< --output $@ $(ELM_MAKE_FLAGS)
	@cat $(JSMAIN) >> $@

$(JSUITESTFILE): $(ELMUITESTMAIN) $(ELM_SOURCES)
	@echo "Building elm UI tests"
	@elm make $< --output $@

clean:
	rm $(JSFILE) $(JSUITESTFILE)

# dev: ELM_MAKE_FLAGS += --debug
dev: all

dist: ELM_MAKE_FLAGS += --optimize
dist: all
	@echo "Minifying JS file"
	@uglifyjs "$(JSFILE)" --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | uglifyjs --mangle --output="$(JSFILE)"

all: $(JSFILE) $(JSUITESTFILE)

watch:
	@find src -name '*.elm' -or -name '*.js' | entr $(MAKE) dev

deploy: clean dist
	./node_modules/.bin/gh-pages -d $(OUTFOLDER)

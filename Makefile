.PHONY=all dist dev watch clean

default: dist

ELM_MAKE_FLAGS=

OUTFOLDER=dist/
JSFILE=$(OUTFOLDER)/context-cards.js

SRC=src/
ELMMAIN=$(SRC)/ContextCards.elm
JSMAIN=$(SRC)/index.js

$(JSFILE): $(ELMMAIN) $(JSMAIN)
	@echo "Building elm"
	@elm make $< --output $@ $(ELM_MAKE_FLAGS)
	@cat $(JSMAIN) >> $@

clean:
	rm $(JSFILE)

dev: ELM_MAKE_FLAGS += --debug
dev: all

dist: ELM_MAKE_FLAGS += --optimize
dist: all
	@echo "Minifying JS file"
	@uglifyjs "$(JSFILE)" --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | uglifyjs --mangle --output="$(JSFILE)"

all: $(JSFILE)

watch:
	@find src -name '*.elm' -or -name '*.js' | entr $(MAKE) dev


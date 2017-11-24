/**
* WebHelp version 1.0.0
* https://github.com/bgrins/spectrum
* Author: Luis Otávio
* License: MIT
*/

jQuery(function ($) {
  'use strict';

  /**
  * Função de inicialização do app
  */
  var App = {
    init: function () {
      this.property = this.propertyStorage();
      this.property.init();
      this._applyCss();
      this.view();
      this.bindEvents();
      this.initButtons();
    },

    utilities: {
      key: {
        esc: 27,
        enter: 13
      },
      string: {
        empty: ''
      }
    },

    defaultOptions: {
      fontFamily: 'OpenDyslexic',
      fontSize: 18
    },


    /**
    * Propriedades que podem ser alteradas pelo aplicativo
    */
    propertyStorage: function () {
      var lsName = "propertyWebHelp";

      var property = {
        $fontSize: null,
        $fontFamily: null,
        $lineHeight: null,
        $backgroundColor: null,
        $fontColor: null,
        $fontWeight: null,
        $fontStyle: null,
        $textDecoration: null,
        $textAlign: null,
        $paragraphSpacing: null,
        $columnWidth: null,
        $letterSpacing: null,
        $rulerSize: null,
        $highlightColor: null,
        $overlayColor: null,
        $overlayOpacity: null,
        $overlayNegative: null,
        $highlighterActive: false,
        $fontFamilyActive: false,
        $fontSizeActive: false
      };

      /**
      * Salva as alterações feitas pelo app para a página
      */
      var save = function() {
        localStorage.setItem(lsName, JSON.stringify(property));
      };

      /**
        * ?????
        */
      return {
        init: function() {
          if (localStorage.getItem(lsName) != null)
            property = JSON.parse(localStorage.getItem(lsName));
        },

        /**
        * Get the current font size.
        */
        getFontSize: function() {
          if (property.$fontSizeActive)
            return property.$fontSize;
          else
              return null;
        },

        /**
        * Set a new font size.
        * @param value: new font size.
        */
        setFontSize: function(value) {
          property.$fontSize = value;
          save();
        },

        /**
        * Get the current font family.
        */
        getFontFamily: function() {
          if(property.$fontFamilyActive)
            return property.$fontFamily;
          else
            return null;
        },

        /**
        * Set a new font family.
        * @param value: new font family.
        */
        setFontFamily: function(value) {
          property.$fontFamily = value;
          save();
        },

        /**
        * Get the current line height value.
        */
        getLineHeight: function() {
          return property.$lineHeight;
        },

        /**
        * Set a new line height.
        * @param value: new line height.
        */
        setLineHeight: function(value) {
          property.$lineHeight = value;
          save();
        },

        /**
        * Get the current font weight value.
        */
        getFontWeight: function() {
          return property.$fontWeight;
        },

        /**
        * Set a new font weight.
        * @param value: new font weight.
        */
        setFontWeight: function(value) {
          property.$fontWeight = value;
          save();
        },

        /**
        * Get the current font style value.
        */
        getFontStyle: function() {
          return property.$fontStyle;
        },

        /**
        * Set a new font style.
        * @param value: new font style
        */
        setFontStyle: function(value) {
          property.$fontStyle = value;
          save();
        },

        /**
        * Get the current text decoration value.
        */
        getTextDecoration: function() {
          return property.$textDecoration;
        },

        /**
        * Set a new value for text decoration.
        * @param value: new text decoration value.
        */
        setTextDecoration: function(value) {
          property.$textDecoration = value;
          save();
        },

        /**
        * Get the current text alignment value.
        */
        getTextAlign: function() {
          return property.$textAlign;
        },

        /**
        * Set a new value for text alignment.
        * @param value: new text alignment value.
        */
        setTextAlign: function(value) {
          property.$textAlign = value;
          save();
        },

        /**
        * Get the current font color.
        */
        getFontColor: function() {
          return property.$fontColor;
        },

        /**
        * Set a new font color.
        * @param value: new font color.
        */
        setFontColor: function(value) {
          property.$fontColor= value;
          save();
        },

        /**
        * Get the current background color.
        */
        getBackgroundColor: function() {
          return property.$backgroundColor;
        },

        /**
        * Set a new background color.
        * @param value: new color.
        */
        setBackgroundColor: function(value) {
          property.$backgroundColor= value;
          save();
        },

        /**
        * Get the letter spacing value.
        */
        getLetterSpacing: function() {
          return property.$letterSpacing;
        },

        /**
        * Set a new value for the letter spacing.
        * @param value: new letter spacing value.
        */
        setLetterSpacing: function(value) {
          property.$letterSpacing = value;
          save();
        },

        /**
        * Get the paragraph spacing value.
        */
        getParagraphSpacing: function() {
          return property.$paragraphSpacing;
        },

        /**
        * Set a new value for the paragraph spacing.
        * @param value: new paragraph spacing value.
        */
        setParagraphSpacing: function(value) {
          property.$paragraphSpacing = value;
          save();
        },

        /**
        * Get the current font highlight color value.
        */
        getHighlightColor: function() {
          if(property.$highlightColor == null)
            return '#ffff7b';
          else
            return property.$highlightColor;
        },

        /**
        * Set a new font highlight color.
        * @param value: new color.
        */
        setHighlightColor: function(value) {
          property.$highlightColor = value;
          save();
        },

        getOverlayColor: function() {
          return property.$overlayColor;
        },

        setOverlayColor: function(value) {
          property.$overlayColor = value;
          save();
        },

        getOverlayOpacity: function() {
          return property.$overlayOpacity;
        },

        setOverlayOpacity: function(value) {
          property.$overlayOpacity = value;
          save();
        },

        getNegativeOverlay: function(){
          return property.$overlayNegative;
        },

        setNegativeOverlay: function(value){
          property.$overlayNegative = value;
          save();
        },

        /**
        * Get the current value of the ruler size.
        */
        getRulerSize: function() {
          return property.$rulerSize;
        },

        /**
        * Set a new ruler size.
        * @param value: new ruler size.
        */
        setRulerSize: function(value) {
          property.$rulerSize = value;
          save();
        },

        getColumnWidth: function() {
          return property.$columnWidth;
        },

        setColumnWidth: function(value) {
          property.$columnWidth = value;
          save();
        },

        getHighlighterActive: function() {
          return property.$highlighterActive;
        },

        setHighlighterActive: function(value) {
          property.$highlighterActive = value;
          save();
        },

        getFontFamilyActive: function() {
          return property.$fontFamilyActive;
        },

        setFontFamilyActive: function(value) {
          property.$fontFamilyActive = value;
          save();
        },

        getFontSizeActive: function() {
          return property.$fontSizeActive;
        },

        setFontSizeActive: function(value) {
          property.$fontSizeActive = value;
          save();
        },

        /**
        * Undo all the changes done by the app.
        */
        clear: function() {
          localStorage.removeItem(lsName);
          for (var p in property) {
            if (property.hasOwnProperty(p))
            property[p] = null;
          }
        }
      };
    },

    /**
    * Generates the new CSS code to the page at runtime.
    * @return: JSON on CSS format.
    */
    styleSheet: function() {
      return {
        'body *': {
          //line_height: line_height
          background_color: this.property.getBackgroundColor() + " !important",
          filter: this.property.getNegativeOverlay() + " !important",
          color: this.property.getFontColor() + " !important",
          font_family: this.property.getFontFamily() != null ? this.property.getFontFamily() + " !important" : " ",
          font_style: this.property.getFontStyle() + " !important",
          font_weight: this.property.getFontWeight() + " !important",
          text_decoration: this.property.getTextDecoration() + " !important",
          letter_spacing: this.property.getLetterSpacing() + "px !important"
        },

        "html": {
         "-webkit-filter": this.property.getNegativeOverlay() + " !important",
         filter: this.property.getNegativeOverlay() + " !important"
        },

        "body": {
          background_image: this.property.getBackgroundColor() != null ? "none !important" : " "
        },

        "h1, h1 a": {
          font_size: this.property.getFontSize() != null ? this.property.getFontSize() * 2.1 + "pt !important" : " "
        },

        "h2, h2 a": {
          font_size: this.property.getFontSize() != null ? this.property.getFontSize() * 1.9 + "pt !important" : " "
        },

        "h3, h3 a": {
          font_size: this.property.getFontSize()  != null ? this.property.getFontSize() * 1.7 + "pt !important" : " "
        },

        "h4, h4 a": {
          font_size: this.property.getFontSize() != null ? this.property.getFontSize() * 1.5 + "pt !important" : " "
        },

        "h5, h5 a": {
          font_size: this.property.getFontSize() != null ? this.property.getFontSize() * 1.3 + "pt !important" : " "
        },

        "h6, h6 a": {
          font_size: this.property.getFontSize() != null ? this.property.getFontSize() * 1.1 + "pt !important" : " "
        },

        "h1, h1 a, h2, h2 a, h3, h3 a, h4, h4 a, h5, h5 a, h6, h6 a, p": {
          line_height: ((this.property.getLineHeight() == null && this.property.getFontSize() != null) ? "1.5" : this.property.getLineHeight()) + "em !important",
        },

        "h1, h2, h3, p": {
          //max_width: textWidth + "px !important",
          //padding_left: paddingTextWidth,
          //padding_right: paddingTextWidth,
          //margin: marginTextWidth
        },

        "p": {
          font_size: this.property.getFontSize() +"pt !important",
          text_align: this.property.getTextAlign() != null ? this.property.getTextAlign() + " !important" : " ",
          padding: this.property.getParagraphSpacing() != null ? "0px !important" : " ",
          margin: this.property.getParagraphSpacing() != null ? "0 0 " + this.property.getParagraphSpacing() + "em !important" : " "
        },

        "*::selection": {
          background: this.property.getHighlighterActive() == true ? this.property.getHighlightColor()  + " !important": ""
        }
      }
    },

    /**
    * Contain all elements of the application.
    */ 
    view: function () {
      this.$page = $(document);
      this.$webHelpApp = $('#webHelp-toolbar');

      /**
      * Links a HTML element to the variables.
      * In $opt, the elements linked are divs from app.html that are represented as lists. 
      */
      this.$opt = {
        all: $('#webHelp-toolbar ul'),
        lineSpacing: this.$webHelpApp.find('#line-spacing-options'),
        letterSpacing: this.$webHelpApp.find('#letter-spacing-options'),
        paragraphSpacing: this.$webHelpApp.find('#paragraph-spacing-options'),
        rulerSize: this.$webHelpApp.find('#ruler-options'),
        fontFamily: document.getElementById('font-family-options'),
        fontSize: document.getElementById('font-size-options'),
        columnWidth: this.$webHelpApp.find('#column-width-options'),
        overlayOpacityOptions: this.$webHelpApp.find('#overlay-opacity-options')
      };

      /**
      * Links an HTML element to the variables.
      * In $listOpt, the elements linked are ul's from app.html. 
      */
      this.$listOpt = {
        lineSpacing: this.$webHelpApp.find('#line-spacing-options li'),
        letterSpacing: this.$webHelpApp.find('#letter-spacing-options li'),
        paragraphSpacing: this.$webHelpApp.find('#paragraph-spacing-options li'),
        rulerSize: this.$webHelpApp.find('#ruler-options li'),
        fontSize: this.$webHelpApp.find('#font-size-options li'),
        fontFamily: this.$webHelpApp.find('#font-family-options li'),
        columnWidth: this.$webHelpApp.find('#column-width-options li'),
        overlayOpacity: this.$webHelpApp.find('#overlay-opacity-options li')
      };

      /**
      * Links a HTML element to the variables.
      * In $button, the elements linked are instant action buttons from app.html. 
      */
      this.$button = {
        removeBold: this.$webHelpApp.find('#remove-bold-btn'),
        removeItalic: this.$webHelpApp.find('#remove-italic-btn'),
        fontSize: document.getElementById('font-size-btn'),
        fontSizeOptions: document.getElementById('font-size-options-btn'),
        fontFamily: document.getElementById('font-family-btn'),
        fontFamilyOptions: document.getElementById('font-family-options-btn'),
        removeUnderline: this.$webHelpApp.find('#remove-underline-btn'),
        paragraphLeft: this.$webHelpApp.find('#paragraph-left-btn'),
        fontColor: this.$webHelpApp.find('#font-color-btn'),
        backgroundColor: this.$webHelpApp.find('#background-color-btn'),
        lineSpacing: this.$webHelpApp.find('#line-spacing-btn'),
        columnWidth: this.$webHelpApp.find('#column-width-btn'),
        letterSpacing: this.$webHelpApp.find('#letter-spacing-btn'),
        paragraphSpacing: this.$webHelpApp.find('#paragraph-spacing-btn'),
        highlight: document.getElementById('highlight-btn'),
        highlightOptions: this.$webHelpApp.find('#highlight-options-btn'),
        ruler: this.$webHelpApp.find('#ruler-btn'),
        rulerOptions: this.$webHelpApp.find('#ruler-options-btn'),
        close: this.$webHelpApp.find('#close-btn'),
        undo: this.$webHelpApp.find('#undo-btn'),
        dictionary: this.$webHelpApp.find('#dictionary-btn'),
        config: this.$webHelpApp.find('#config-btn'),
        overlay: this.$webHelpApp.find('#overlay-btn'),
        overlayOptions: this.$webHelpApp.find('#overlay-options-btn'),
        overlayOpacity: this.$webHelpApp.find('#overlay-opacity-btn'),
        overlayNegative: this.$webHelpApp.find('#negative-overlay-btn'),
        screenReader: this.$webHelpApp.find('#screen-reader-btn'),
        removeHighlight: this.$page.find('#remove-highligh-btn')
      };

      /**
      * Links the dictionary div overlay to the variable.
      */
      this.$dictionary = {
        container: this.$webHelpApp.find('#webHelp-overlay-dictionary')
      };

      /**
      * Links the configuration div overlay to the variable.
      */
      this.$config = {
        container: this.$webHelpApp.find('#webHelp-overlay-config')
      };

      /**
      * These variables receive the divs used to create the reading ruler.
      */
      this.$ruler = {
        top: null,
        bottom: null
      };

      /**
      * Variable used to create the overlay.
      */
      this.$overlay = {
        pos: null
      }

      this.$highlighter = null;

      // Colors used on the palette color
      this.palette = [["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
                      ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
                      ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
                      ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
                      ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
                      ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
                      ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
                      ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]];
      },

    // Bind an event to an element.
    bindEvents: function () {
      this.$page.on('click', this.hideDropDowns.bind(this));

      this.showPaletteColor(this.$button.backgroundColor);
      this.showPaletteColor(this.$button.fontColor);
      this.showPaletteColor(this.$button.overlayOptions);

      this.createHighlightPaletteColor(this.$button.highlightOptions);

      $(this.$button.backgroundColor).on('show.spectrum', this.hideDropDowns.bind(this));
      $(this.$button.fontColor).on('show.spectrum', this.hideDropDowns.bind(this));
      $(this.$button.highlightOptions).on('show.spectrum', this.hideDropDowns.bind(this));
      $(this.$button.overlayOptions).on('show.spectrum', this.hideDropDowns.bind(this));

      /**
      * The "onclick" events binded here are for regular buttons.
      * These buttons only do an instant action.
      */

      //mouseover = passar o botão por cima

      this.$button.close.on('click', this.close.bind(this));
     // this.$button.close.on('mouseover', this.readButton.bind(this));

      this.$button.fontSizeOptions.addEventListener('click', this.showFontSizeOpt.bind(this));
      this.$button.fontSize.addEventListener('click', this.activeFontSize.bind(this));
      this.$listOpt.fontSize.on('click', this.onSelectFontSize.bind(this));

      this.$button.fontFamilyOptions.addEventListener('click', this.showFontFamilyOpt.bind(this));
      this.$button.fontFamily.addEventListener('click', this.activeFontFamily.bind(this));
      this.$listOpt.fontFamily.on('click', this.onSelectFontFamily.bind(this));

      this.$button.columnWidth.on('click', this.showColumnWidthOpt.bind(this));

      this.$button.lineSpacing.on('click', this.showLineSpacingOpt.bind(this));
      this.$button.letterSpacing.on('click', this.showLetterSpacingOpt.bind(this));
      this.$button.paragraphSpacing.on('click', this.showParagraphSpacingOpt.bind(this));
      this.$button.removeUnderline.on('click', this.removeUnderline.bind(this));
      this.$button.paragraphLeft.on('click', this.setParagraphLeft.bind(this));

      this.$button.removeItalic.on('click', this.removeItalic.bind(this));
      this.$button.removeBold.on('click', this.changeFontWeight.bind(this));

      this.$button.highlight.addEventListener("click", this.activeHighlightText.bind(this), false);

      this.$button.ruler.on('click', this.activeRuler.bind(this));
      this.$button.rulerOptions.on('click', this.showRulerOptionsOpt.bind(this));

      this.$button.overlay.on('click', this.activeOverlay.bind(this));
      this.$button.overlayNegative.on('click', this.activeNegativeOverlay.bind(this));
      this.$button.overlayOpacity.on('click', this.showOverlayOpacityOpt.bind(this));

      this.$button.undo.on('click', this.undo.bind(this));
      this.$button.dictionary.on('click', this.showDictionary.bind(this));
      this.$button.config.on('click', this.showConfig.bind(this));

      this.$button.screenReader.on('click', this.readHighlightedText.bind(this));

      $(this.$button.fontColor).on('change.spectrum', this.changeFontColor.bind(this));
      $(this.$button.backgroundColor).on('change.spectrum', this.changeBackgroundColor.bind(this));
      $(this.$button.highlightOptions).on('change.spectrum', this.changeHighlightColor.bind(this));
      $(this.$button.overlayOptions).on('change.spectrum', this.changeOverlayColor.bind(this));

      this.$listOpt.rulerSize.on('click', this.selectRulerSize.bind(this));

      this.$listOpt.columnWidth.on('click', this.selectColumnWidth.bind(this));
      this.$listOpt.lineSpacing.on('click', this.selectLineSpacing.bind(this));
      this.$listOpt.letterSpacing.on('click', this.selectLetterSpacing.bind(this));
      this.$listOpt.paragraphSpacing.on('click', this.selectParagraphSpacing.bind(this));
      this.$listOpt.overlayOpacity.on('click', this.selectOverlayOpacity.bind(this));

      document.getElementById('close-dictionary-btn').addEventListener("click", this.closeDictionay.bind(this), false);
      document.getElementById('dictionary-search-btn').addEventListener("click", this.dictionarySearch.bind(this), false);

      document.getElementById('save-pattern-btn').addEventListener("click", this.savePattern.bind(this), false);
      document.getElementById('apply-pattern-btn').addEventListener("click", this.applyPattern.bind(this), false);

      document.getElementById('close-config-btn').addEventListener("click", this.closeConfig.bind(this), false);

      this.$page.on('keydown', this.closePressEsc.bind(this));
    },

    readButton: function(){
      //document.getElementsByClassName
      responsiveVoice.speak("Boa tarde!", "UK English Male");   
    },

    /**
    * Close the dictionary opened from the synonyms dictionary.
    * @param e:
    */
    closeDictionay: function(e) {
      document.getElementById('webHelp-overlay-dictionary').setAttribute('style', 'display: none');
      document.getElementById("dictionary-input").value = this.utilities.string.empty;
    },

    /**
    * Close the dictionary opened from the synonyms dictionary.
    * @param e:
    */
    closeConfig: function(e) {
      document.getElementById('webHelp-overlay-config').setAttribute('style', 'display: none');
      //document.getElementById("dictionary-input").value = this.utilities.string.empty;
    },


    /**
    * Hide all dropdowns activated from other buttons.
    * @param e:
    */
    hideDropDowns: function(e) {
      this.$opt.all.removeClass('options-active');
    },

    hideColorPickers: function(e) {
      $('.colorpicker-webhelp').addClass('sp-hidden');
    },

    /**
    * Show the font size option list to the user.
    * If it don't have been already activated, it hides all other dropdowns opened before been activated.
    * @param e:
    */
    showFontSizeOpt: function(e) {
      if(!this.$opt.fontSize.classList.contains("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        this.$opt.fontSize.classList.add('options-active');
      }
    },

    showColumnWidthOpt: function(e) {
      if(!this.$opt.columnWidth.hasClass("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        this.$opt.columnWidth.addClass('options-active');
      }
    },

    /**
    * Show the font family option list to the user.
    * If it don't have been already activated, it hides all other dropdowns opened before been activated.
    * @param e:
    */
    showFontFamilyOpt: function(e) {
      if (!this.$opt.fontFamily.classList.contains("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        //TODO: criar método genérico
        this.$opt.fontFamily.classList.add('options-active');
      }
    },

    activeFontFamily: function(e) {
      if (this._isActive(e.target)) {
        this._disableButton(e.target);
        this.property.setFontFamilyActive(false);
      } else {
        this.property.setFontFamilyActive(true);

        if(this.property.getFontFamily() == null) {
          this.property.setFontFamily(this.defaultOptions.fontFamily);
        }

        this._selectFontFamily();
      }

      this._applyCss();
    },

    activeFontSize: function(e) {
      if (this._isActive(e.target)) {
        this._disableButton(e.target);
        this.property.setFontSizeActive(false);
      } else {
        this.property.setFontSizeActive(true);

        if(this.property.getFontSize() == null) {
          this.property.setFontSize(this.defaultOptions.fontSize);
        }

        this._selectFontSize();
      }

      this._applyCss();
    },


    _isActive(button) {
      return button.classList.contains('bnt-active');
    },

    _activeButton: function(button) {
      button.classList.add('bnt-active');
    },

    _disableButton: function(button) {
      button.classList.remove('bnt-active');
    },

    /**
    * Show the line spacing option list to the user.
    * If it don't have been already activated, it hides all other dropdowns opened before been activated.
    * @param e:
    */
    showLineSpacingOpt: function(e) {
      if(!this.$opt.lineSpacing.hasClass("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        this.$opt.lineSpacing.addClass('options-active');
      }
    },

    /**
    * Show the letter spacing option list to the user.
    * If it don't have been already activated, it hides all other dropdowns opened before been activated.
    * @param e:
    */
    showLetterSpacingOpt: function(e) {
      if(!this.$opt.letterSpacing.hasClass("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        this.$opt.letterSpacing.addClass('options-active');
      }
    },

    /**
    * Show the paragraph spacing option list to the user.
    * If it don't have been already activated, it hides all other dropdowns opened before been activated.
    * @param e:
    */
    showParagraphSpacingOpt: function(e) {
      if(!this.$opt.paragraphSpacing.hasClass("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        this.$opt.paragraphSpacing.addClass('options-active');
      }
    },

    /**
    * Show the ruler option list to the user.
    * If it don't have been already activated, it hides all other dropdowns opened before been activated.
    * @param e:
    */
    showRulerOptionsOpt: function(e) {
      if(!this.$opt.rulerSize.hasClass("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        this.$opt.rulerSize.addClass('options-active');
      }
    },

    /**
    * Show the overlay opacity option list to the user.
    * If it don't have been already activated, it hides all other dropdowns opened before been activated.
    * @param e:
    */
    showOverlayOpacityOpt: function(e) {
      if(!this.$opt.overlayOpacityOptions.hasClass("options-active")) {
        e.stopPropagation();
        this.hideDropDowns();
        this.hideColorPickers();
        this.$opt.overlayOpacityOptions.addClass('options-active');
      }
    },

     /**
    * Allows the user to select a font size from the option list.
    * After the option is selected, it's data is used to set the font size. Then, the CSS is applied to the text in the web page.
    * @param e:
    */
    onSelectFontSize: function(e) {
      var option = e.target;
      this.property.setFontSize(option.getAttribute("data-opt"));
      this.property.setFontSizeActive(true);
      this._selectOption(this.$listOpt.fontSize, option);
      this._activeButton(this.$button.fontSize);
      this._applyCss();
    },

    /**
    * Allows the user to select a new font from the option list.
    * After the option is selected, it's data is used to set the new font. Then, the CSS is applied to the text in the web page.
    * @param e:
    */
    onSelectFontFamily: function(e) {
      var option = e.target;
      this.property.setFontFamily(option.getAttribute("data-opt"));
      this.property.setFontFamilyActive(true);
      this._selectOption(this.$listOpt.fontFamily, option);
      this._activeButton(this.$button.fontFamily);
      this._applyCss();
    },

    selectColumnWidth: function(e) {
      var option = e.target;
      this.property.setColumnWidth(option.getAttribute("data-opt"));
      this._selectOption(this.$listOpt.columnWidth, option);
      this._applyCss();
    },

    /**
    * Allows the user to select a line spacing from the option list.
    * After the option is selected, it's data is used to set the line spacing. Then, the CSS is applied to the text in the web page.
    * @param e:
    */
    selectLineSpacing: function(e) {
      var option = e.target;
      this.property.setLineHeight(option.getAttribute("data-opt"));
      this._selectOption(this.$listOpt.lineSpacing, option);
      this._applyCss();
    },

    /**
    * Allows the user to select a letter spacing from the option list.
    * After the option is selected, it's data is used to set the letter spacing. Then, the CSS is applied to the text in the web page.
    * @param e:
    */
    selectLetterSpacing: function(e) {
      var option = e.target;
      this.property.setLetterSpacing(option.getAttribute("data-opt"));
      this._selectOption(this.$listOpt.letterSpacing, option);
      this._applyCss();
    },

    /**
    * Allows the user to select a font size from the option list.
    * After the option is selected, it's data is used to set the font size. Then, the CSS is applied to the text in the web page.
    * @param e:
    */
    selectParagraphSpacing: function(e) {
      var option = e.target;
      this.property.setParagraphSpacing(option.getAttribute("data-opt"));
      this._selectOption(this.$listOpt.paragraphSpacing, option);
      this._applyCss();
    },

    /**
    * Allows the user to select a different size for the reading ruler from the option list.
    * After the option is selected, it's data is used to set the ruler size. Then, the CSS is applied to the text in the web page.
    * @param e:
    */
    selectRulerSize: function(e) {
      var option = e.target;
      this.property.setRulerSize(option.getAttribute("data-opt"));
      this._selectOption(this.$listOpt.rulerSize, option);

      if (!this._isRulerActive()) {
        this._createRuler();
      }
    },

    changeFontWeight: function(e) {
      if (this.property.getFontWeight() == null){
        this.property.setFontWeight('normal');
        e.target.classList.add('bnt-active');
      }
      else {
        this.property.setFontWeight(null);
        e.target.classList.remove('bnt-active');
      }

      this._applyCss();
    },

    removeItalic: function(e) {
      if (this.property.getFontStyle() == null){
        this.property.setFontStyle('normal');
        e.target.classList.add('bnt-active');

      }
      else {
        this.property.setFontStyle(null);
        e.target.classList.remove('bnt-active');
      }

      this._applyCss();
    },

    removeUnderline: function(e) {
      if (this.property.getTextDecoration() == null){
        this.property.setTextDecoration('none');
        e.target.classList.add('bnt-active');
      }
      else {
        this.property.setTextDecoration(null);
        e.target.classList.remove('bnt-active');
      }

      this._applyCss();
    },

    setParagraphLeft: function(e) {
      if (this.property.getTextAlign() == null) {
        this.property.setTextAlign('left');
        e.target.classList.add('bnt-active');
      }
      else {
        this.property.setTextAlign(null);
        e.target.classList.remove('bnt-active');
      }

      this._applyCss();
    },

    activeHighlightText: function(event) {

      if(this.$highlighter == null)
        this.$highlighter = new TextHighlighter(document.body);

      if (!event.target.classList.contains('bnt-active')) {
        this.$highlighter.enable();
        event.target.classList.add('bnt-active');
        this.property.setHighlighterActive(true);
      }
      else {
        event.target.classList.remove('bnt-active');
        this.$highlighter.disable();
        this.property.setHighlighterActive(false);
      }

      this._applyCss();
    },

    removeHighlights: function(e) {
      if (this.$highlighter != null)
        this.$highlighter.removeHighlights();
    },

    activeRuler: function(e) {
      if (!this._isRulerActive()) {
        this._createRuler();
      }
      else {
        this._removeRuler();
      }
    },

    _createRuler: function() {
      this.$ruler.top = $("<div id='ruler-top' class='webhelp-ruler'>");
      this.$ruler.bottom = $("<div id='ruler-bottom' class='webhelp-ruler'>");

      $("body").prepend(this.$ruler.top);
      $("body").prepend(this.$ruler.bottom);

      this.$button.ruler.addClass('bnt-active');

      document.onmousemove = this.moveRuler.bind(this);
    },

    _removeRuler: function() {
      this.$button.ruler.removeClass('bnt-active');

      if(this.$ruler.top !== null) {

        this.$ruler.top.remove();
        this.$ruler.bottom.remove();

        this.$ruler.top = null;
        this.$ruler.bottom = null;
      }
    },

    closePressEsc: function(e) {
      e = e || window.event;
      if (e.keyCode == this.utilities.key.esc) {
        this._removeRuler();
        this._removeOverlay();
        this.closeDictionay();
        this.closeConfig();
      }
      //Remove o evento
      document.onmousemove  = null;
    },

    moveRuler: function(e){
      var size = 60;
      if(this.property.getRulerSize() != null)
        size = this.property.getRulerSize();

      this.$ruler.top.css("height", e.clientY - parseInt(size) + "px");
      this.$ruler.bottom.css("top", e.clientY + parseInt(size) + "px");
    },

    showPaletteColor: function(button, container) {
      $(button).spectrum({
        showPaletteOnly: true,
        showPalette:true,
        color: 'transparent',
        className: 'colorpicker-webhelp',
        palette: this.palette,
        containerClassName: container
      });

      this.hideDropDowns();
    },

    createHighlightPaletteColor: function(button) {
      $(button).spectrum({
        showPaletteOnly: true,
        showPalette:true,
        color: 'transparent',
        className: 'colorpicker-webhelp',
        palette: this.palette,
        containerClassName: "highligh-palette-color-whd"
      });

      var palette = $('.highligh-palette-color-whd').children()[0];
      $(palette).prepend("<div id='remove-highligh-btn'>Remover Marcações</div>");

      $('#remove-highligh-btn').on('click', this.removeHighlights.bind(this));

      this.hideDropDowns();
    },

    changeFontColor: function(e, color) {
        this.property.setFontColor(color.toHexString());
        this._applyCss();
    },

    changeBackgroundColor: function(e, color) {
      this.property.setBackgroundColor(color.toHexString());
      this._applyCss();
    },

    changeHighlightColor: function(e, color) {

      if(this.$highlighter == null)
        this.$highlighter = new TextHighlighter(document.body);

      if (!this.$button.highlight.classList.contains('bnt-active')) {
        this.$highlighter.enable();
        this.$button.highlight.classList.add('bnt-active');
        this.property.setHighlighterActive(true);
      }

      this.$highlighter.setColor(color.toHexString());
      this.property.setHighlightColor(color.toHexString());
      this._applyCss();
    },

    undo: function(e) {
      this._clearStyle();
      this.property.clear();
      this.resetOptions();
      this.removeHighlights();
      this._removeRuler();
    },

    _clearStyle: function() {
        document.getElementById("injectCssWebHelp").innerHTML = '';
    },

/*******************************************OVERLAY*************************************************************************/
    _createOverlay: function(e) {
      this.$overlay.pos = $("<div id='overlay-div' class='webHelp-overlay-dictionary'>");
      $("body").prepend(this.$overlay.pos);

      this.$button.overlay.addClass('bnt-active');

      document.getElementById("overlay-div").style.backgroundColor = this.property.getOverlayColor();
      document.getElementById("overlay-div").style.opacity = this.property.getOverlayOpacity();
    },

    activeOverlay: function(e) {
      if (!this._isOverlayActive()) {
        this._createOverlay();
      }
      else {
        this._removeOverlay();
      }
    },

    _removeOverlay: function() {
      this.$button.overlay.removeClass('bnt-active');

      if(this.$overlay.pos !== null) {

        this.$overlay.pos.remove();
        this.$overlay.pos = null;
      }
    },

    changeOverlayColor: function(e, color){
      document.getElementById("overlay-div").style.backgroundColor = color;
      this.property.setOverlayColor(color.toHexString());
    },

    selectOverlayOpacity: function(e) {
      var option = e.target;
      var opacity = option.getAttribute("data");
      this._selectOption(this.$listOpt.overlayOpacity, option);
      this.property.setOverlayOpacity(option.getAttribute("data"));
      document.getElementById("overlay-div").style.opacity = opacity;
    },

/********************************** EFEITO NEGATIVO  **********************************************/
    activeNegativeOverlay: function(e) {
      if (this.property.getNegativeOverlay() != 'invert(100%)'){
        this.property.setNegativeOverlay('invert(100%)');
        e.target.classList.add('bnt-active');
      }
      else {
        this.property.setNegativeOverlay(null);
        e.target.classList.remove('bnt-active');
      }

      this._applyCss();     
    },

/************************************ LEITOR DE TELAS **********************************************/
    readHighlightedText: function(event){
      var text;
      if(window.getSelection) {
            text = String(window.getSelection());
        }else if(document.selection){
            text = document.selection.createRange().text;
        }
      responsiveVoice.speak(text, "Brazilian Portuguese Female", {rate: 8.5});
    },

/**************************** CONFIGURAÇÕES E SALVAMENTO EM LOCAL STORAGE ****************************************/

    showConfig: function(e) {
      document.getElementById('webHelp-overlay-config').setAttribute('style', 'display: block');
    },

    savePattern: function() {
      var fSize = this.property.getFontSize();
      /*var fFamily = this.property.getFontFamily();
      var lHeight = this.property.getLineHeight();
      var bgColor = this.property.getBackgroundColor();
      var fColor = this.property.getFontColor();
      var fWeight = this.property.getFontWeight();
      var fStyle = this.property.getFontStyle();
      var tDecoration = this.property.getTextDecoration();
      var tAlign = this.property.getTextAlign();
      var pSpacing = this.property.getParagraphSpacing();
      var cWidth = this.property.getColumnWidth();
      var lSpacing = this.property.getLetterSpacing();
      var rSize =  this.property.getRulerSize();
      var hColor = this.property.getHighlightColor();
      var oColor = this.property.getOverlayOpacity();
      var oOpacity = this.property.getOverlayOpacity();
      var hActive = this.property.getHighlighterActive();
      var fFamilyActive = this.property.getFontFamilyActive();
      var fSizeActive = this.property.getFontSizeActive();*/
      localStorage.setItem('fontSize', fSize);
      //chrome.storage.sync.set({fonteSize: fSize});      
    },

    applyPattern: function() {
      var fSize = window.localStorage.getItem('fontSize');
      /*var fFamily = this.property.getFontFamily();
      var lHeight = this.property.getLineHeight();
      var bgColor = this.property.getBackgroundColor();
      var fColor = this.property.getFontColor();
      var fWeight = this.property.getFontWeight();
      var fStyle = this.property.getFontStyle();
      var tDecoration = this.property.getTextDecoration();
      var tAlign = this.property.getTextAlign();
      var pSpacing = this.property.getParagraphSpacing();
      var cWidth = this.property.getColumnWidth();
      var lSpacing = this.property.getLetterSpacing();
      var rSize =  this.property.getRulerSize();
      var hColor = this.property.getHighlightColor();
      var oColor = this.property.getOverlayOpacity();
      var oOpacity = this.property.getOverlayOpacity();
      var hActive = this.property.getHighlighterActive();
      var fFamilyActive = this.property.getFontFamilyActive();
      var fSizeActive = this.property.getFontSizeActive();*/
      this.property.setFontSize(fSize);
      this._applyCss();
    },

    showDictionary: function(e) {
      document.getElementById('webHelp-overlay-dictionary').setAttribute('style', 'display: block');
      var word = document.getSelection().toString().trim();

      $("#sinonimos").remove();

      if(word != this.utilities.string.empty) {
        var result = this._getSynonymous(word);

        document.getElementById("dictionary-input").value = word;

        var sinonimos = $("<ul id='sinonimos'>");

        $(result.sinonimos).each(function(index, item){
          sinonimos.append(
            $(document.createElement('li')).text(item)
          );
        });

        document.getElementById("dictionary-result").appendChild(sinonimos[0]);
      }
    },

    dictionarySearch: function(e) {
      var word = document.getElementById("dictionary-input").value.trim();

      if(word != this.utilities.string.empty) {
        var result = this._getSynonymous(word);

        $("#sinonimos").remove();
        var sinonimos = $("<ul id='sinonimos'>");

        $(result.sinonimos).each(function(index, item){
          sinonimos.append(
            $(document.createElement('li')).text(item)
          );
        });

        document.getElementById("dictionary-result").appendChild(sinonimos[0]);
      }

    },

    _createDictionary: function() {
      var dicionario = $( );

      $("body").prepend(dicionario);

      $('#close-dictionary-btn').on('click', function(){
        $('body').remove('#webHelp-overlay-dictionary');
      });

    },

    _createConfig: function() {
      var config = $( );

      $("body").prepend(config);

      $('#close-config-btn').on('click', function(){
        $('body').remove('#webHelp-overlay-config');
      });

    },

    resetOptions: function() {
      this.$button.removeBold.removeClass("bnt-active");
      this.$button.removeItalic.removeClass('bnt-active');
      this.$button.removeUnderline.removeClass('bnt-active');
      this.$button.paragraphLeft.removeClass('bnt-active');
      this.$listOpt.fontSize.removeClass('option-selected');
      this.$listOpt.fontFamily.removeClass('option-selected');
      this.$listOpt.letterSpacing.removeClass('option-selected');
      this.$listOpt.paragraphSpacing.removeClass('option-selected');
      this.$listOpt.rulerSize.removeClass('option-selected');
      this.$button.highlight.classList.remove('bnt-active');
      this.$button.overlayNegative.removeClass('bnt-active');
      this.property.setHighlighterActive(false);
      //this.$highlighter.disable();
      this._removeOverlay();
    },

    _selectFontSize: function() {
      if (this.property.getFontSizeActive()) {
        this._activeButton(this.$button.fontSize);
        var option = this._getLitOption(this.$listOpt.fontSize, this.property.getFontSize());
        this._selectOption(this.$listOpt.fontSize, option);
      }
    },

    _selectFontFamily: function() {
      if (this.property.getFontFamilyActive()) {
        this._activeButton(this.$button.fontFamily);
        var option = this._getLitOption(this.$listOpt.fontFamily, this.property.getFontFamily());
        this._selectOption(this.$listOpt.fontFamily, option);
      }
    },

    initButtons: function() {
      if (this.property.getFontWeight() != null)
        this.$button.removeBold.addClass('bnt-active');

      if (this.property.getFontStyle() != null)
        this.$button.removeItalic.addClass('bnt-active');

      if (this.property.getTextDecoration() != null)
        this.$button.removeUnderline.addClass('bnt-active');

      if (this.property.getTextAlign() != null)
          this.$button.paragraphLeft.addClass('bnt-active');

      if (this.property.getFontSize() != null) {
        var option = this._getLitOption(this.$listOpt.fontSize, this.property.getFontSize());
        this._selectOption(this.$listOpt.fontSize, option);
      }

      if (this.property.getFontFamilyActive()) {
        var option = this._getLitOption(this.$listOpt.fontFamily, this.property.getFontFamily());
        this._selectOption(this.$listOpt.fontFamily, option);
        this.$button.fontFamily.classList.add('bnt-active');
      }

      if (this.property.getLineHeight() != null) {
        var option = this._getLitOption(this.$listOpt.lineSpacing, this.property.getLineHeight());
        this._selectOption(this.$listOpt.lineSpacing, option);
      }

      if (this.property.getLetterSpacing() != null) {
        var option = this._getLitOption(this.$listOpt.letterSpacing, this.property.getLetterSpacing());
        this._selectOption(this.$listOpt.letterSpacing, option);
      }

      if (this.property.getParagraphSpacing() != null) {
        var option = this._getLitOption(this.$listOpt.paragraphSpacing, this.property.getParagraphSpacing());
        this._selectOption(this.$listOpt.paragraphSpacing, option);
      }

      if (this.property.getRulerSize() != null) {
        var option = this._getLitOption(this.$listOpt.rulerSize, this.property.getRulerSize());
        this._selectOption(this.$listOpt.rulerSize, option);
      }
    },

    _getLitOption: function(list, option) {
      var result = $.grep(list, function(e){
        return e.getAttribute("data-opt") == option;
        })[0];
      return result;
    },

    close: function () {
      this.$webHelpApp.removeClass('active');
    },

    _selectOption: function(listOpt, opt) {
      listOpt.removeClass('option-selected');
      opt.classList.add('option-selected');
    },

    _applyCss: function() {
      $.injectCSS(this.styleSheet(), {
        truncateFirst: true,
        containerName: "injectCssWebHelp"
      });
    },

    _getSynonymous: function(param) {
      var request = new XMLHttpRequest();

      request.open("get", "http://dicionario.azurewebsites.net/api/values/"+param, false);
      request.send();

      var synonymous = request.responseText;

      synonymous = synonymous.replace(/"/g, "");
      synonymous = synonymous.replace(/#/g, '"');

      return JSON.parse(synonymous);
    },

    _isRulerActive: function() {
      return this.$ruler.top != null && this.$ruler.bottom != null;
    },

    _isOverlayActive: function(){
      return this.$overlay.pos != null;
    }

  };

  //Inicializa o App.
  App.init();
});

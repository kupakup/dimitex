'use strict';

// Настройки слайдера для определения длины печати
this.options.onChange(this.el.value);
$(function () {
	$("#tkan").change(function(){calculatePayment();});
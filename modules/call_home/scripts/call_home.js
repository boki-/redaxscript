/**
 * @tableofcontents
 *
 * 1. call home
 * 2. startup
 *
 * @since 2.0.0
 *
 * @package Redaxscript
 * @author Henry Ruhs
 */

(function ($)
{
	'use strict';

	/* @section 1. call home */

	$.fn.callHome = function (options)
	{
		/* extend options */

		if (r.modules.callHome.options !== options)
		{
			options = $.extend({}, r.modules.callHome.options, options || {});
		}

		/* create tracker */

		if (options.id && options.url)
		{
			_gaq.push(
			[
				'_setAccount',
				options.id
			],
			[
				'_setDomainName',
				options.url
			],
			[
				'_trackPageview'
			]);

			/* track event */

			_gaq.push(
			[
				'_trackEvent',
				String('call-home'),
				String(r.version),
				String(r.baseURL)
			]);
		}
	};

	/* @section 2. startup */

	$(function ()
	{
		if (r.modules.callHome.startup && r.constants.LOGGED_IN === r.constants.TOKEN && r.constants.FIRST_PARAMETER === 'admin' && !r.constants.ADMIN_PARAMETER && typeof _gaq === 'object')
		{
			$.fn.callHome(r.modules.callHome.options);
		}
	});
})(window.jQuery || window.Zepto);
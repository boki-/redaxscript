<?php

/**
 * github tracker install
 *
 * @since 2.1.0
 * @deprecated 2.0.0
 *
 * @package Redaxscript
 * @category Modules
 * @author Henry Ruhs
 */

function github_tracker_install()
{
	$query = 'INSERT INTO ' . PREFIX . 'modules (name, alias, author, description, version, status, access) VALUES (\'Github tracker\', \'github_tracker\', \'Redaxmedia\', \'Integrates milestones and issues from Github\', \'2.1.0\', 1, 0)';
	mysql_query($query);
}

/**
 * github tracker uninstall
 *
 * @since 2.1.0
 * @deprecated 2.0.0
 *
 * @package Redaxscript
 * @category Modules
 * @author Henry Ruhs
 */

function github_tracker_uninstall()
{
	$query = 'DELETE FROM ' . PREFIX . 'modules WHERE alias = \'github_tracker\' LIMIT 1';
	mysql_query($query);
}
?>
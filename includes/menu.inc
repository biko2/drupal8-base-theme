<?php
/**
 * @file
 * Theme and preprocess functions for menus
 */

/**
 * Prepares variables for single local task link templates.
 *
 * Default template: menu-local-task.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - element: A render element containing:
 *     - #link: A menu link array with 'title', 'url', and (optionally)
 *       'localized_options' keys.
 *     - #active: A boolean indicating whether the local task is active.
 */
function educa_preprocess_menu_local_task(&$variables) {
  $link = $variables['element']['#link'];
  $link_text = $link['title'];

  $classes = ['nav-link'];
  if (!empty($variables['element']['#active'])) {
    $classes[] = 'active';
  }

  $variables['link'] = array(
    '#type' => 'link',
    '#title' => $link_text,
    '#url' => $link['url'],
    '#attributes' => ['class' => $classes]
  );
}
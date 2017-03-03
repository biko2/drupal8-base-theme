<?php
/**
 * @file
 * Theme and preprocess functions for block
 */

use Drupal\Core\Render\Element;

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function educa_theme_suggestions_block_alter(array &$suggestions, array $variables) {
  // Check for BlockContent.
  if (!empty($variables['elements']['content'])) {
    if (!empty($variables['elements']['content']['#block_content'])) {
      // Get the block bundle.
      $bundle = $variables['elements']['content']['#block_content']->bundle();

      // Add to theme suggestions.
      $suggestions[] = 'block__' . $bundle;
    }
  }
}


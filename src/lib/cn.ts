import clsx from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes
 * Handles conditional classes, removes duplicates, and manages Tailwind conflicts
 * Uses clsx for robust class merging
 *
 * @example
 * cn('p-4', 'text-blue-500')
 * cn('base', isActive && 'bg-blue-100')
 * cn('p-4', { 'text-red-500': isError })
 */
export const cn = clsx;

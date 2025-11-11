# GrantScope Brand Guide

This document outlines the design system, colors, typography, and component styling used throughout the GrantScope application.

## Color Palette

### Light Mode
- **Background**: `oklch(1 0 0)` - Pure white
- **Foreground**: `oklch(0.145 0 0)` - Near black
- **Primary**: `oklch(0.205 0 0)` - Dark gray/charcoal
- **Primary Foreground**: `oklch(0.985 0 0)` - Off white
- **Secondary**: `oklch(0.97 0 0)` - Light gray
- **Secondary Foreground**: `oklch(0.205 0 0)` - Dark gray
- **Muted**: `oklch(0.97 0 0)` - Light gray
- **Muted Foreground**: `oklch(0.556 0 0)` - Medium gray
- **Accent**: `oklch(0.97 0 0)` - Light gray
- **Accent Foreground**: `oklch(0.205 0 0)` - Dark gray
- **Destructive**: `oklch(0.577 0.245 27.325)` - Red
- **Border**: `oklch(0.922 0 0)` - Light gray border
- **Input**: `oklch(0.922 0 0)` - Light gray input
- **Ring**: `oklch(0.708 0 0)` - Medium gray ring

### Dark Mode
- **Background**: `oklch(0.145 0 0)` - Near black
- **Foreground**: `oklch(0.985 0 0)` - Off white
- **Primary**: `oklch(0.922 0 0)` - Light gray
- **Primary Foreground**: `oklch(0.205 0 0)` - Dark gray
- **Secondary**: `oklch(0.269 0 0)` - Dark gray
- **Secondary Foreground**: `oklch(0.985 0 0)` - Off white
- **Muted**: `oklch(0.269 0 0)` - Dark gray
- **Muted Foreground**: `oklch(0.708 0 0)` - Medium gray
- **Accent**: `oklch(0.269 0 0)` - Dark gray
- **Accent Foreground**: `oklch(0.985 0 0)` - Off white
- **Destructive**: `oklch(0.704 0.191 22.216)` - Bright red
- **Border**: `oklch(1 0 0 / 10%)` - Translucent white
- **Input**: `oklch(1 0 0 / 15%)` - Translucent white
- **Ring**: `oklch(0.556 0 0)` - Medium gray

### Chart Colors
- **Chart 1**: `oklch(0.646 0.222 41.116)` - Orange
- **Chart 2**: `oklch(0.6 0.118 184.704)` - Teal
- **Chart 3**: `oklch(0.398 0.07 227.392)` - Blue
- **Chart 4**: `oklch(0.828 0.189 84.429)` - Yellow
- **Chart 5**: `oklch(0.769 0.188 70.08)` - Green

## Typography

### Font Families
- **Sans Serif**: Geist Sans (Primary font for body text and UI)
- **Monospace**: Geist Mono (Code and technical content)

### Font Sizes
- **Display**: `text-4xl` (36px) - Page titles
- **Heading 1**: `text-3xl` (30px) - Section headings
- **Heading 2**: `text-2xl` (24px) - Subsection headings
- **Heading 3**: `text-xl` (20px) - Card titles
- **Heading 4**: `text-lg` (18px) - Small headings
- **Body**: `text-base` (16px) - Default body text
- **Small**: `text-sm` (14px) - Secondary text
- **Extra Small**: `text-xs` (12px) - Captions and labels

### Font Weights
- **Bold**: `font-bold` (700) - Headings and emphasis
- **Semibold**: `font-semibold` (600) - Subheadings
- **Medium**: `font-medium` (500) - Buttons and labels
- **Normal**: `font-normal` (400) - Body text

## Button Styles

### Variants
- **Default**: Primary button with solid background
  - Background: `bg-primary`
  - Text: `text-primary-foreground`
  - Hover: `hover:bg-primary/90`

- **Outline**: Secondary button with border
  - Border: `border border-input`
  - Background: `bg-background`
  - Hover: `hover:bg-accent`

- **Secondary**: Subtle button
  - Background: `bg-secondary`
  - Text: `text-secondary-foreground`
  - Hover: `hover:bg-secondary/80`

- **Ghost**: Minimal button
  - Background: Transparent
  - Hover: `hover:bg-accent`

- **Destructive**: Danger/delete actions
  - Background: `bg-destructive`
  - Text: `text-destructive-foreground`
  - Hover: `hover:bg-destructive/90`

### Sizes
- **Default**: `h-10 px-4 py-2`
- **Small**: `h-9 px-3`
- **Large**: `h-11 px-8`
- **Icon**: `h-10 w-10` (square button for icons)

## Card Styles

### Default Card
- Background: `bg-card`
- Border: `border border-border`
- Radius: `rounded-lg` (10px)
- Shadow: `shadow-sm`
- Hover: `hover:shadow-lg` (for interactive cards)

### Card Header
- Padding: `p-6`
- Title: `text-2xl font-semibold`
- Description: `text-sm text-muted-foreground`

### Card Content
- Padding: `p-6 pt-0`

## Badge Styles

### Variants
- **Default**: `bg-primary text-primary-foreground`
- **Secondary**: `bg-secondary text-secondary-foreground`
- **Destructive**: `bg-destructive text-destructive-foreground`
- **Outline**: `border border-input`

## Input Styles

### Text Input
- Height: `h-10`
- Padding: `px-3 py-2`
- Border: `border border-input`
- Radius: `rounded-md`
- Background: `bg-background`
- Focus: `focus:ring-2 focus:ring-ring`

### Textarea
- Min Height: `min-h-[80px]`
- Padding: `px-3 py-2`
- Border: `border border-input`
- Radius: `rounded-md`
- Background: `bg-background`

## Layout

### Container
- Max Width: `container` (responsive)
- Padding: `px-4` (16px horizontal padding)

### Spacing
- **Extra Small**: `gap-2` or `space-y-2` (8px)
- **Small**: `gap-4` or `space-y-4` (16px)
- **Medium**: `gap-6` or `space-y-6` (24px)
- **Large**: `gap-8` or `space-y-8` (32px)
- **Extra Large**: `gap-12` or `space-y-12` (48px)

### Border Radius
- **Small**: `rounded-sm` (4px)
- **Medium**: `rounded-md` (6px)
- **Large**: `rounded-lg` (10px)
- **Extra Large**: `rounded-xl` (14px)
- **Full**: `rounded-full` (9999px)

## Icons

### Icon Library
- **Primary**: Lucide React icons
- **Size**: Default `h-5 w-5` (20px), Large `h-6 w-6` (24px)
- **Color**: Inherits from parent or `text-muted-foreground`

### Common Icons
- **Search**: `Search`
- **File/Document**: `FileText`
- **Check/Success**: `CheckCircle`
- **Error/Warning**: `AlertCircle`
- **Delete**: `Trash2`
- **Download**: `Download`
- **External Link**: `ExternalLink`
- **Navigation**: `ArrowLeft`, `ArrowRight`
- **Menu**: `Menu`
- **Settings**: `Settings`
- **User**: `User`
- **Cart**: `ShoppingCart`
- **AI/Generate**: `Sparkles`

## Shadows

- **Small**: `shadow-sm` - Subtle elevation
- **Medium**: `shadow` - Default shadow
- **Large**: `shadow-lg` - Prominent elevation
- **Extra Large**: `shadow-xl` - Maximum elevation

## Transitions

- **Default**: `transition-colors` - Color changes
- **Shadow**: `transition-shadow` - Shadow changes
- **All**: `transition-all` - All properties
- **Duration**: Default 150ms

## Responsive Breakpoints

- **Small**: `sm:` - 640px and up
- **Medium**: `md:` - 768px and up
- **Large**: `lg:` - 1024px and up
- **Extra Large**: `xl:` - 1280px and up
- **2X Large**: `2xl:` - 1536px and up

## Component Patterns

### Page Header
```tsx
<div className="mb-8">
  <h1 className="text-4xl font-bold mb-2">Page Title</h1>
  <p className="text-lg text-muted-foreground">Description</p>
</div>
```

### Section Header
```tsx
<div className="mb-6">
  <h2 className="text-3xl font-bold mb-2">Section Title</h2>
  <p className="text-muted-foreground">Section description</p>
</div>
```

### Card Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

### Loading State
```tsx
<Skeleton className="h-6 w-3/4 mb-2" />
```

### Empty State
```tsx
<Card>
  <CardContent className="pt-12 pb-12 text-center">
    <Icon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
    <h3 className="text-xl font-semibold mb-2">Empty State Title</h3>
    <p className="text-muted-foreground">Description</p>
  </CardContent>
</Card>
```

## Accessibility

- All interactive elements have focus states
- Color contrast meets WCAG AA standards
- Icons include `sr-only` labels for screen readers
- Forms include proper labels and error messages
- Keyboard navigation supported throughout

## Notes

- Use ShadCN UI components as the foundation
- Maintain consistent spacing using Tailwind's spacing scale
- Prefer semantic color tokens (e.g., `text-muted-foreground`) over hardcoded colors
- Keep animations subtle and purposeful
- Test in both light and dark modes
- Ensure responsive design works on all screen sizes

---

Last Updated: 2025-11-11


# AGBO Shopify Store Theme

A custom Shopify theme based on Dawn, styled to match the AGBO website aesthetic.

## Features

- Dark, modern design inspired by [agboverse.com](https://www.agboverse.com/)
- Bold typography with Archivo for headings and Inter for body text
- Sleek card designs with subtle shadows and rounded corners
- Minimalist button styling
- Smooth animations and hover effects
- Responsive design for all devices

## Local Development Setup

### Prerequisites

1. **Node.js and npm**: Make sure you have Node.js installed on your machine
2. **Shopify CLI**: Required for theme development and testing
3. **Shopify Store**: Either a paid store or a development store through Shopify Partners

### Step 1: Install Shopify CLI

Install the Shopify CLI using npm:

```bash
npm install -g @shopify/cli @shopify/theme
```

### Step 2: Clone the Repository

If you haven't already, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/agbo-shopify-store.git
cd agbo-shopify-store
```

### Step 3: Authenticate with Shopify

Authenticate with your Shopify account:

```bash
shopify auth login
```

This will open a browser window where you'll need to:
1. Log in to your Shopify account
2. Select the store you want to connect to
3. Authorize the CLI to access your store

### Step 4: Start the Development Server

Connect to your store and start the development server:

```bash
shopify theme dev --store=your-store-name.myshopify.com
```

Replace `your-store-name.myshopify.com` with your actual Shopify store URL (e.g., `9v1vb5-ri.myshopify.com`).

This command will:
1. Upload your theme to your store as a development theme
2. Start a local development server
3. Provide you with URLs to preview your theme
4. Watch for changes in your local files and automatically update the development theme
ls
### Step 5: Preview and Customize

The CLI will provide you with two URLs:
- **Preview URL**: To see your theme in action
- **Theme Editor URL**: To customize your theme using Shopify's theme editor

As you make changes to your local theme files, they will be automatically uploaded to your development theme, and you'll see the changes reflected in real-time.

### Step 6: Check for Theme Errors

You can validate your theme for errors using:

```bash
shopify theme check
```

This will identify any issues in your theme code that need to be fixed.

### Step 7: Publishing Your Theme

When you're ready to make your theme live:

```bash
shopify theme publish
```

## Additional Useful Commands

- **List all themes in your store**:
  ```bash
  shopify theme list
  ```

- **Pull an existing theme from your store**:
  ```bash
  shopify theme pull
  ```

- **Push your local theme to your store**:
  ```bash
  shopify theme push
  ```

## Troubleshooting

- **Authentication Problems**: Try logging out and logging back in:
  ```bash
  shopify auth logout
  shopify auth login
  ```

- **Connection Issues**: Make sure your store URL is correct and that you have the necessary permissions.

- **File Sync Issues**: Sometimes files may not sync properly. Try stopping the development server (Ctrl+C) and restarting it.

## Customization

This theme can be further customized through the Shopify Theme Editor. Key customization areas include:

- Colors: The theme uses a dark color palette with blue accents
- Typography: Bold headings with clean body text
- Layout: Modern, spacious layouts with focus on visual content
- Animations: Subtle animations enhance the user experience

## Support

For support with this theme, please contact your theme administrator or developer.

---

*Based on Shopify's Dawn theme, customized for AGBO.*

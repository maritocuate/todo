# Simple Todo App

A beautiful and functional todo application built with Next.js and TypeScript, featuring a clean and modern design.

![Simple Todo Screenshot](https://images.unsplash.com/photo-1586359223916-532192604a4f?auto=format&fit=crop&q=80&w=1200&h=600)

## Features

- ✨ Beautiful and modern UI design
- 📱 Fully responsive layout
- 🎯 Task categorization with color-coded labels
- 🔍 Filter tasks by status and category
- ✏️ Edit and delete tasks with smooth animations
- ✅ Mark tasks as complete/incomplete
- 🌓 Light and dark mode support

## Tech Stack

- **Framework:** Next.js 13
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/
│   ├── todo-list.tsx     # Main todo list component
│   └── ui/               # UI components
├── lib/
│   ├── data.ts          # Initial data and mock content
│   ├── types.ts         # TypeScript interfaces
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Features in Detail

### Task Management
- Create new tasks with categories
- Edit existing tasks
- Delete tasks with smooth animations
- Mark tasks as complete/incomplete

### Categories
- Pre-defined categories with unique colors
- Filter tasks by category
- Visual indicators for each category

### Filtering
- View all tasks
- Filter by completion status (Active/Completed)
- Filter by category

### Animations
- Smooth entry animation for new tasks
- Elegant exit animation for deleted tasks
- Subtle hover and interaction effects

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

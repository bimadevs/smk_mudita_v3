import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';
import { useTheme } from './ThemeProvider';

// Mock the ThemeProvider hook
vi.mock('./ThemeProvider', () => ({
  useTheme: vi.fn(),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, onClick }: any) => (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  ),
}));

describe('Navbar Component', () => {
  const mockToggleTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useTheme as any).mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    });
  });

  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('SMK Mudita')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    // There are multiple "Beranda", "Profil", etc. (Desktop and Mobile)
    // In desktop view (initially), only the desktop links are in the DOM
    // but hidden by CSS. However, jsdom doesn't support full CSS visibility.
    // We check if at least one instance of each link exists.
    expect(screen.getAllByText('Beranda')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Profil')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Jurusan')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Kesiswaan')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Kontak')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Daftar PPDB')[0]).toBeInTheDocument();
  });

  it('calls toggleTheme when theme toggle button is clicked', () => {
    render(<Navbar />);
    // Get all theme toggle buttons (Desktop and Mobile)
    const themeButtons = screen.getAllByLabelText('Toggle theme');
    fireEvent.click(themeButtons[0]);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Navbar />);

    // Mobile menu should not be visible initially
    // Since it's conditionally rendered: {isMobileMenuOpen && (...)}
    expect(screen.queryByRole('link', { name: /Beranda/i })).toBeInTheDocument(); // This might find desktop links

    // In our Navbar, mobile links are only rendered if isMobileMenuOpen is true
    // But desktop links are always there (hidden by CSS class 'hidden md:flex')

    // Let's check for a text that only appears in the mobile menu if possible.
    // Actually, all links are duplicated.

    // Before clicking menu:
    // How many "Beranda" links? Desktop has 1. Mobile menu has 1.
    // If mobile menu is closed, there should be 1.
    expect(screen.getAllByText('Beranda')).toHaveLength(1);

    // Find and click mobile menu toggle
    const menuToggle = screen.getByText('menu');
    fireEvent.click(menuToggle);

    // After clicking menu:
    // Should have 2 "Beranda" links now
    expect(screen.getAllByText('Beranda')).toHaveLength(2);

    // Click again to close
    fireEvent.click(menuToggle);
    expect(screen.getAllByText('Beranda')).toHaveLength(1);
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />);

    // Open mobile menu
    const menuToggle = screen.getByText('menu');
    fireEvent.click(menuToggle);
    expect(screen.getAllByText('Beranda')).toHaveLength(2);

    // Click a link in the mobile menu (the second one)
    const mobileLink = screen.getAllByText('Beranda')[1];
    fireEvent.click(mobileLink);

    // Mobile menu should be closed, so only 1 "Beranda" remains
    expect(screen.getAllByText('Beranda')).toHaveLength(1);
  });
});

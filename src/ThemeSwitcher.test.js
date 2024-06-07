import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';

describe('ThemeSwitcher Component', () => {
  test('renders theme switcher buttons', () => {
    render(<ThemeSwitcher />);
    const moonButton = screen.getByLabelText('Dark Mode');
    const sunButton = screen.getByLabelText('Light Mode');
    expect(moonButton).toBeInTheDocument();
    expect(sunButton).toBeInTheDocument();
  });

  test('clicking on theme switcher button changes the theme', () => {
    render(<ThemeSwitcher />);
    const moonButton = screen.getByLabelText('Dark Mode');
    fireEvent.click(moonButton);
    expect(document.documentElement).toHaveClass('dark');
  });
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ExplorePage from '@/pages/ExplorePage';
import WorkspacePage from '@/pages/WorkspacePage';
import ProgramPage from '@/pages/ProgramPage';
import { useAuth } from '@/contexts/AuthContext';
import { useActiveEnrollments } from '@/hooks/useDatabase';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';

vi.mock('@/contexts/AuthContext');
vi.mock('@/hooks/useDatabase');

describe('ExplorePage', () => {
  it('selects enrolled mode when the student has program enrollments', async () => {
    (useAuth as any).mockReturnValue({ user: { id: 'u1', name: 'Test User' } });
    (useActiveEnrollments as any).mockReturnValue({ data: [{ type: 'program', target_id: 'backend-mastery' }] });

    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <ExplorePage />
        </MemoryRouter>
      </I18nextProvider>
    );

    // the enrolled tab should be visible and active
    await waitFor(() => {
      expect(screen.getByText(/My Programs|मेरे कार्यक्रम/)).toBeInTheDocument();
    });
  });
});

describe('WorkspacePage', () => {
  it('renders module and topic titles instead of empty placeholders', async () => {
    (useAuth as any).mockReturnValue({ user: { id: 'u1' } });
    // provide an enrollment that grants access to the "lce" track
    (useActiveEnrollments as any).mockReturnValue({ data: [{ type: 'track', target_id: 'lce' }] });

    // render the workspace page first
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={["/workspace/lce"]}>
          <Routes>
            <Route path="/workspace/:trackId" element={<WorkspacePage />} />
          </Routes>
        </MemoryRouter>
      </I18nextProvider>
    );

    // open the mobile sidebar by clicking the hamburger menu
    // note: We're not loading Tailwind CSS, so layout classes may not apply
    const toggleBtn = await screen.findByLabelText('Open sidebar');
    toggleBtn.click();


    // wait for a known module title from the low-code track to appear in the sidebar
    const moduleTitles = await screen.findAllByText(/The Low-Code Revolution/i);
    expect(moduleTitles.length).toBeGreaterThan(0);

    // pick a topic title from the first module
    const topicTitles = await screen.findAllByText(/Foundations of Abstraction/i);
    expect(topicTitles.length).toBeGreaterThan(0);
  });
});

// program page enrollment behavior

describe('ProgramPage', () => {
  it('marks courses enabled when only program enrollment exists', async () => {
    (useAuth as any).mockReturnValue({ user: { id: 'u1', name: 'Test User' } });
    (useActiveEnrollments as any).mockReturnValue({ data: [{ type: 'program', target_id: 'backend-mastery' }] });

    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={["/program/backend-mastery"]}>
          <Routes>
            <Route path="/program/:programId" element={<ProgramPage />} />
          </Routes>
        </MemoryRouter>
      </I18nextProvider>
    );

    // the program page should render and the course button should be enabled
    const courseBtn = await screen.findByRole('button', { name: /Backend Fundamentals/i });
    expect(courseBtn).not.toBeDisabled();
  });
});

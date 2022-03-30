import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EnhanceUrl from './package/enhance-url';

const NEW_WINDOW_BUTTON_TEST_ID = 'iframe-button';
const IFRAME_BUTTON_TEST_ID = 'iframe-button';
describe('Enhance Url tests', () => {
    beforeEach(() => {
        render(
            <div>
                This is a openstreetmap{' '}
                <EnhanceUrl
                    url="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
                    text="Map"
                />{' '}
                url, feel free to open it in a new window or inside an iframe here using the menu
                buttons
            </div>
        );
    });
    test('Expect menu icons to be in the document', async () => {
        expect(screen.queryByTestId(NEW_WINDOW_BUTTON_TEST_ID)).not.toBeInTheDocument();
        expect(screen.queryByTestId(IFRAME_BUTTON_TEST_ID)).not.toBeInTheDocument();

        fireEvent.mouseOver(screen.getByTestId('link-url'));
        await waitFor(() => screen.getByTestId('link-url'));

        expect(screen.queryByTestId(NEW_WINDOW_BUTTON_TEST_ID)).toBeInTheDocument();
        expect(screen.queryByTestId(IFRAME_BUTTON_TEST_ID)).toBeInTheDocument();
    });

    test('Expect to hide menu icons if click outside of link.', async () => {
        fireEvent.mouseOver(screen.getByTestId('link-url'));
        await waitFor(() => screen.getByTestId('link-url'));

        expect(screen.queryByTestId('menu-container')).toBeInTheDocument();
        fireEvent.mouseOut(screen.getByTestId('link-url'));
        expect(screen.queryByTestId('menu-container')).not.toBeInTheDocument();
    });

    test('Expect to open iframe when click iframe button', async () => {
        expect(screen.queryByTestId('iframe-container')).not.toBeInTheDocument();

        fireEvent.mouseOver(screen.getByTestId('link-url'));
        await waitFor(() => screen.getByTestId('link-url'));

        expect(screen.queryByTestId('menu-container')).toBeInTheDocument();
        expect(screen.queryByTestId('iframe-container')).not.toBeInTheDocument();

        expect(screen.queryByTestId(IFRAME_BUTTON_TEST_ID)).toBeInTheDocument();
        screen.queryByTestId(IFRAME_BUTTON_TEST_ID)?.click();
        expect(screen.queryByTestId('iframe-container')).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";

import BookingForm from '../BookingForm';
import AppContextProvider from '../AppContextProvider';

test('Renders the BookingForm heading', () => {
    render(
        <AppContextProvider>
            <BookingForm />
        </AppContextProvider>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});
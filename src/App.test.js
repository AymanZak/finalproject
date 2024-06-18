import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';




// Test 1

test('verifica del componente Welcome', () => {
  render(<App />);
  const linkElement = screen.getByText(/App React Epicode/i);
  expect(linkElement).toBeInTheDocument();
});


// Test 2

describe('App Test', () => {

  it('verifica del numero di card', () => {
    render(<App />);
    const allTheBookCards = screen.getAllByTestId('book-card');
    expect(allTheBookCards).toHaveLength(150);
  });

});

 // test 3

  it('verifica del componenet Comment Area', ()  => {
    render(<App />);
    const btnDetail = screen.getAllByRole('button', {name: /Book Details/i })
    fireEvent.click(btnDetail[0])
    const commentArea= screen.getAllByPlaceholderText(/Inserisci qui il tuo commento/i);
    expect(commentArea[0]).toBeInTheDocument()

  })

  //test 4 

  describe('Filter App Test', () => {

    it('ricerca di libri tramite navbar', () => {
      render(<App />);
      const searchBook = screen.getByPlaceholderText(/Cerca un libro.../i);
      fireEvent.change(searchBook, { target: { value: 'witcher' } });
      const allTheBooksCards = screen.getAllByTestId('book-card');
      expect(allTheBooksCards).toHaveLength(3);
    });
  
  });



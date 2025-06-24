import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve adicionar 2 comentários', () => {
        render(<PostComment />)
        const comentario1 = 'Testando comentário 1'
        const comentario2 = 'Testando comentário 2'

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: comentario1
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: comentario2
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getByText(comentario1)).toBeInTheDocument()
        expect(screen.getByText(comentario2)).toBeInTheDocument()
    })
});
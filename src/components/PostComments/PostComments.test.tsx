import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve adicionar 2 comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Testando comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Testando comentário 1')).toBeInTheDocument()
        // Resolver repetição de código
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Testando comentário 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Testando comentário 2')).toBeInTheDocument()
    })
});
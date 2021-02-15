import { render } from '@testing-library/react';
import Button from './index'


test("Pada saat disable", () => {
    const { container } = render(<Button isDisable></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("Pada saat loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
})

test("Pada saat berbentuk tag <a>", () => {
    const { container } = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
})

test("Pada saat berbentuk tag <Link>", () => {
    const { container } = render(<Button type="link" href=""></Button>)

    expect(container.querySelector('a')).not.toBeInTheDocument()
})

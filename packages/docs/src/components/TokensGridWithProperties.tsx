import '../styles/tokens-grid.css'
import * as tokens from '@caio-ui/tokens'

// interface TokensGridProps {
//     tokens: Record<string, string>
// }

export function TokensGridWithProperties() {

    Object.entries(tokens).forEach(([key, value]) => {
        console.log(key)
        console.log(value)
    })

    return (
        <table className="tokens-grid">
            <thead>
                <tr>
                    <th>Token</th>
                    <th>Propriedades</th>
                </tr>
            </thead>

            <tbody>
                {Object.entries(tokens).map(([key, value]) => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>
                                {Object.entries(value).map(([namePropertyValue, _]) =>
                                    <span className="text-grid-tokens-properties">{namePropertyValue} {'\n'}</span>
                                )}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}
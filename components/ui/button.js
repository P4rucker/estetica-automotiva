export function Button({ children, className }) {
  return <button className={\`transition duration-300 \${className}\`}>{children}</button>;
}
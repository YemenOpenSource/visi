# @sfwnisme/visi

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40sfwnisme%2Fvisi.svg)](https://badge.fury.io/js/%40sfwnisme%2Fvisi)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

`@sfwnisme/visi` is a React package that adapts SolidJS's powerful and efficient conditional rendering components. It offers a declarative API to conditionally render components based on given conditions, closely mimicking SolidJS's approach to reactive rendering in React.

This package aims to provide an efficient, easy-to-use, and flexible solution for handling conditional rendering in React applications, inspired by SolidJS's reactivity model.

## Features

- **🚀 Declarative Syntax**: Write conditions in a clean, readable, and declarative manner.
- **⚡ Efficient Conditional Rendering**: Improve your app's performance with optimized rendering approaches.
- **🔀 React and SolidJS Inspiration**: Built to replicate SolidJS's efficient rendering while being tailored to React's ecosystem.

## 📦 Installation

Install the package using npm:

```bash
npm install @sfwnisme/visi
```

Or using yarn:

```bash
yarn add @sfwnisme/visi
```

## 🚀 Usage

### Single Render Comparison

#### Traditional React

```tsx
// Approach 1
isAuthorized ? <Dashboard /> : <Login />

// Approach 2
if(!isAuthorized) {
  return <Login />
}
return <Dashboard />
```

#### Visi

```tsx
// Single condition
<Visible when={isAuthorized} fallback={<Login />}>
  <Dashboard />
</Visible>

// Nested condition
<Visible when={isAuthorized} fallback={<Login />}>
  <Dashboard />
  <Visible when={isLogin}>
    <LogoutButton />
  </Visible>
</Visible>

// Callback condition
<Visible when={user} fallback={<p>loading...</p>}>
  {((userInfo: {name: string, age: string}) => (
    <p>{userInfo.name} is {userInfo.age} years old</p>
  ))}
</Visible>
```

### Shift Render Comparison

#### Traditional React

```tsx
// Ternary approach
role === 'admin'
  ? <AdminDashboard />
  : role === 'supervisor'
    ? <SupervisorDashboard />
    : role === 'user'
      ? <UserDashboard />
      : <Login />;

// If-else approach
if(role === 'admin') {
  return <AdminDashboard />
}
if(role === 'supervisor') {
  return <SupervisorDashboard />
}
if(role === 'user') {
  return <UserDashboard />
}
return <Login />
```

#### Visi

```tsx
<Shift fallback={<Login />}>
  <Case when={role === 'admin'}>
    <AdminDashboard />
  </Case>
  <Case when={role === 'supervisor'}>
    <SupervisorDashboard />
  </Case>
  <Case when={role === 'user'}>
    <UserDashboard />
  </Case>
</Shift>
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

If you have any questions or suggestions, please open an issue on GitHub.

# Plantilla E-commerce

Una plantilla moderna de e-commerce construida con React + Vite + TypeScript + TailwindCSS.

## 🚀 Características

- **Diseño Moderno**: Paleta de colores aesthetic con tema oscuro
- **Responsive**: Optimizado para todos los dispositivos
- **Carrito de Compras**: Estado global con Zustand y persistencia en localStorage
- **Filtros Avanzados**: Búsqueda, categorías, rango de precios y ordenamiento
- **Componentes Reutilizables**: UI components modulares y accesibles
- **TypeScript**: Tipado fuerte para mejor desarrollo
- **TailwindCSS**: Estilos utilitarios con tema personalizado
- **GitHub Pages**: Configurado para despliegue automático

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS
- **React Router DOM** - Enrutamiento SPA
- **Zustand** - Estado global
- **clsx** - Utilidad para clases condicionales

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd plantilla-ecommerce
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Badge.tsx       # Componente de badge
│   ├── Button.tsx      # Botón personalizado
│   ├── CartDrawer.tsx  # Drawer del carrito
│   ├── CartItem.tsx    # Item del carrito
│   ├── Categories.tsx  # Sección de categorías
│   ├── FeaturedGrid.tsx # Grid de productos destacados
│   ├── Filters.tsx     # Filtros de productos
│   ├── Footer.tsx      # Pie de página
│   ├── Hero.tsx        # Sección hero
│   ├── Navbar.tsx      # Barra de navegación
│   ├── PriceTag.tsx    # Componente de precio
│   └── ProductCard.tsx # Tarjeta de producto
├── data/
│   └── products.ts     # Datos mock de productos
├── hooks/
│   └── useLocalStorage.ts # Hook para localStorage
├── pages/
│   ├── Home.tsx        # Página de inicio
│   ├── Products.tsx    # Página de productos
│   └── NotFound.tsx    # Página 404
├── store/
│   └── cart.ts         # Store de Zustand para carrito
├── types/
│   └── index.ts        # Tipos TypeScript
├── utils/
│   └── format.ts       # Utilidades de formato
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 🎨 Paleta de Colores

- **Primary**: #6366F1 (Indigo)
- **Accent**: #F472B6 (Pink)
- **Ink**: #0B0B0F (Dark)
- **Paper**: #0F1115 (Dark Gray)
- **Muted**: #94A3B8 (Slate)

## 📱 Páginas

### Home
- Hero section con call-to-action
- Categorías con chips interactivos
- Grid de productos destacados
- Sección About/CTA

### Products
- Filtros laterales (búsqueda, categoría, precio, orden)
- Grid responsive de productos
- Contador de resultados
- Estado vacío

### Carrito
- Drawer lateral con backdrop blur
- Lista de items con controles de cantidad
- Subtotal y botones de acción
- Persistencia en localStorage

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy a GitHub Pages
npm run deploy

# Linting
npm run lint
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Automático (Recomendado)
1. Sube tu código a GitHub
2. Ve a **Settings** > **Pages** en tu repositorio
3. Selecciona **GitHub Actions** como fuente
4. El sitio se desplegará automáticamente en cada push a `main`

### Opción 2: Manual
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Hacer build y deploy
npm run deploy
```

### URL del sitio
Tu sitio estará disponible en:
```
https://[tu-usuario].github.io/[nombre-del-repo]
```

## 🎯 Funcionalidades Implementadas

- ✅ Navegación SPA con React Router
- ✅ Estado global del carrito con Zustand
- ✅ Persistencia en localStorage
- ✅ Filtros combinables (búsqueda, categoría, precio, orden)
- ✅ Diseño responsive
- ✅ Componentes accesibles
- ✅ Tipado TypeScript completo
- ✅ Tema oscuro aesthetic
- ✅ Transiciones suaves
- ✅ Glass effects y backdrop blur

## 🚧 Limitaciones (Demo)

- ❌ Checkout no funcional (botón deshabilitado)
- ❌ Sin backend real
- ❌ Sin autenticación
- ❌ Sin pagos reales
- ❌ Imágenes placeholder

## 📝 Notas de Desarrollo

- Los datos de productos están en `src/data/products.ts`
- El estado del carrito se persiste automáticamente
- Los filtros se aplican en tiempo real
- El diseño es completamente responsive
- Todos los componentes son reutilizables

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

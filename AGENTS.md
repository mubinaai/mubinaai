# AGENTS.md

## UI Development Rule

- For every UI-related task in this project, use `shadcn/ui` components first.
- Avoid building raw custom UI elements if an equivalent `shadcn/ui` component exists.
- Keep new UI code consistent with existing components under `src/components/ui`.

## Notes

- If a required component does not exist yet, add it in the `shadcn/ui` style and place it under `src/components/ui`.

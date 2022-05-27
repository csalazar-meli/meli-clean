const container = new Map<string, unknown>();

export function register<Type, Target>(
  classType: Type,
  classTarget: Target
): void {
  if (container[classType.constructor.name]) {
    throw new Error(`${classType.constructor.name} already registered`);
  }

  container.set(classType.constructor.name, classTarget);
}

export function injectionResolver<T>(classType: ThisType<T>): T {
  return container.get(classType.constructor.name) as T;
}

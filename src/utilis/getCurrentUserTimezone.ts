export const getCurrentUserTimezone = (): string => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return timezone.split("/")[1];
};

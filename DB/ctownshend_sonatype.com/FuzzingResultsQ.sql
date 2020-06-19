SELECT format, packagename, p.description, pvfv.*
	FROM public."package" p
	inner join public.packageversion pv on p.packageid = pv.packageid
	inner join public.packageversionfunction pvf on pv.packageversionid = pvf.packageversionid
	inner join public.packageversionfunctionvulns pvfv on pvf.packageversionfunctionid = pvfv.packageversionfunctionid
	where packagename = 'jquery'

-- DELETE FROM public."package" ;
-- DELETE FROM public.packageversion;
-- DELETE FROM public.packageversionfunction;
-- DELETE FROM public.packageversionfunctionvulns;

Select * FROM public."package" ;
Select * FROM public.packageversion;
Select * FROM public.packageversionfunction;
Select * FROM public.packageversionfunctionvulns;


Select * FROM public."package" p
inner join public.packageversion pv on p.packageid = pv.packageid
inner join public.packageversionfunction pvf on pv.packageversionid = pvf.packageversionid
inner join public.packageversionfunctionvulns pvfv on pvf.packageversionfunctionid = pvfv.packageversionfunctionid;


Select packagename, version
FROM public."package" p
inner join public.packageversion pv on p.packageid = pv.packageid
inner join public.packageversionfunction pvf on pv.packageversionid = pvf.packageversionid
inner join public.packageversionfunctionvulns pvfv on pvf.packageversionfunctionid = pvfv.packageversionfunctionid
group by packagename, datepublished, version
order by packagename, datepublished, version




Select packagename, version, datepublished, functionname
FROM public."package" p
inner join public.packageversion pv on p.packageid = pv.packageid
inner join public.packageversionfunction pvf on pv.packageversionid = pvf.packageversionid
where p.packagename = 'lodash' 
and pv.version = '4.17.15' 
--and pvf.functionname = 'merge'
group by packagename, version, datepublished, functionname
order by packagename, datepublished, version, functionname


Select packagename, version, datepublished, functionname
FROM public."package" p
inner join public.packageversion pv on p.packageid = pv.packageid
inner join public.packageversionfunction pvf on pv.packageversionid = pvf.packageversionid
inner join public.packageversionfunctionvulns pvfv on pvf.packageversionfunctionid = pvfv.packageversionfunctionid
where p.packagename = 'lodash'
and version = '4.17.15'
group by packagename, version, datepublished, functionname
order by packagename, datepublished, version, functionname










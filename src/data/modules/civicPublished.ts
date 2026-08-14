import type { Lesson, OfficialLinkV2, Source } from '@/types';

export const REVIEW = '2026-08-14';

export const src = (
    title: string,
    organization: string,
    url: string,
    usedFor = 'Procedura e requisiti sul sito ufficiale',
): Source => ({
    title,
    organization,
    url,
    type: 'official',
    usedFor,
    lastCheckedAt: REVIEW,
});

export const ol = (
    sourceId: string,
    useWhen: string,
    beforeOpening: string[] = ['SPID, CIE o CNS se il servizio è in area riservata'],
): OfficialLinkV2 => ({
    sourceId,
    useWhen,
    beforeOpening,
});

export function published(
    lesson: Omit<Lesson, 'status' | 'qualityGatePassed' | 'lastReviewedAt'>,
): Lesson {
    return {
        ...lesson,
        status: 'published',
        qualityGatePassed: true,
        lastReviewedAt: REVIEW,
    };
}
